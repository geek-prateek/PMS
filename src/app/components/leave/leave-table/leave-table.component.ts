import { Component, OnInit } from "@angular/core";
import { LeaveDetails } from "../../../Model/leaveDetails";
import { LeaveService } from "../../../services/leave.service";
import { LocalService } from "../../../services/localService";

@Component({
    selector: "app-leave-table",
    templateUrl: "./leave-table.component.html",
    styleUrls: ['./leave-table.component.css']
})
export class LeaveTableComponent implements OnInit{

    constructor(private leaveService: LeaveService, private localService: LocalService){
        this.leaveService.getLeaveDetails().subscribe({
            next: (data) => {
                this.leaveTable = data;
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    leaveTable: LeaveDetails[]=[];

    ngOnInit() {
        this.leaveTable = this.leaveService.leaveDetails;
        // this.localService.saveLeaveData(this.leaveTable);
        
    }
}