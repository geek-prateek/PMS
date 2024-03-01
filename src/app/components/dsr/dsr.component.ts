import { Component } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AddDsrListComponent } from "./addDsrList/addDsrList.component";
import { UserService } from "src/app/services/user.service";
import { DsrDetails } from "src/app/Model/DsrDetails";
import { el } from "@fullcalendar/core/internal-common";
import { elementAt } from "rxjs";

@Component({
    selector: 'app-dsr',
    templateUrl: './dsr.component.html',
    styleUrls: ['../dsr/dsr-table/dsr-table.component.css']
})
export class DsrComponent{
    constructor(private dashboardService: DashboardService, private userService: UserService, private router: Router, private route: ActivatedRoute, private _dialog: MatDialog){}
    dsrTable: DsrDetails[] = [];
    order: string = "";
    userId: number = this.userService.getUserIdfromLocal();
    selectDays= new FormControl('lastdays', Validators.required)
        
    ngOnInit() {
        this.dashboardService.order = this.order;
        this.getDsrDetails();
    }

    openAddEditModal(){
        const dialogRef = this._dialog.open(AddDsrListComponent);
        dialogRef.afterClosed().subscribe({
            next: (data) => {
                if(data){
                    console.log(data);
                    
                    this.getDsrDetails();
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    checkDsrIsFilled(){
        const date = new Date();
        const todayDate = date.toLocaleDateString();
        const filteredData = this.dsrTable.filter((element: any) => element.userId === this.userId && element.dsrDate === todayDate);
        if(filteredData.length === 0){
            this.sendInboxOfNotFillingDSR();
        }
    }

    sendInboxOfNotFillingDSR(){
        alert("Today DSR is not filled yet. Please fill it.");
    }

    openEditModal(dsr: any){
        const dialogRef = this._dialog.open(AddDsrListComponent, {
            data: dsr,
        });
    
        dialogRef.afterClosed().subscribe({
            next: (data) => {
                if(data){
                    this.getDsrDetails();
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
        
    }

    deleteDsrData(id: number){
        this.dashboardService.deleteDsrDetails(id).subscribe({
            next: (data) => {
                console.log(data);
               
                this.getDsrDetails();
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    getDsrDetails(){
        this.dashboardService.getDsrDetails().subscribe({
            next: (data) => {
                const filteredData = data.filter((element: any) => element.userId === this.userId);
                this.dsrTable = filteredData;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    
}