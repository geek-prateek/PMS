import { Component, OnInit } from "@angular/core";
import { LeaveDetails } from "../leaveDetails";
import { LeaveService } from "../leave.service";
import { LocalService } from "../../localService";

@Component({
    selector: "app-leave-table",
    templateUrl: "./leave-table.component.html",
    styleUrls: ['./leave-table.component.css']
})
export class LeaveTableComponent implements OnInit{

    constructor(private leaveService: LeaveService, private localService: LocalService){
       
    }

    leaveTable: LeaveDetails[]=[];

    ngOnInit() {
        this.leaveTable = this.leaveService.leaveDetails;
        this.localService.saveLeaveData(this.leaveTable);
    }
}