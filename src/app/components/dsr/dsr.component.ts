import { Component } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AddDsrListComponent } from "./addDsrList/addDsrList.component";
import { UserService } from "src/app/services/user.service";
import { DsrDetails } from "src/app/Model/tableDetails";

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