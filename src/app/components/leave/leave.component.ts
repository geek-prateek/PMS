import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveService } from "../../services/leave.service";
import { LocalService } from "../../services/localService";
import { MatDialog } from "@angular/material/dialog";
import { LeaveApplyComponent } from "./leave-apply/leave-apply.component";
import { LeaveDetails } from "src/app/Model/leaveDetails";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-leave",
    templateUrl: "./leave.component.html",
    styleUrls: ['../leave/leave-table/leave-table.component.css']
})
export class LeaveComponent{

    constructor(private leaveService: LeaveService, private localService: LocalService, private _dialog: MatDialog, private userService: UserService){}
    leaveTable: LeaveDetails[] =[];
    userId: number = this.userService.getUserIdfromLocal();

    ngOnInit() {
        this.getLeaveDetails();
    }
    
    selectLeave= new FormControl('lastWeek', Validators.required)
    
    openAddEditModal(){
        const dialogRef = this._dialog.open(LeaveApplyComponent);
        dialogRef.afterClosed().subscribe({
            next: (data) => {
                if(data){
                    console.log(data);
                    
                    this.getLeaveDetails();
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
    getLeaveDetails(){
        this.leaveService.getLeaveDetails().subscribe({
            next: (data) => {
                
                this.leaveTable = data;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
}