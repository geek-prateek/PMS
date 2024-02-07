import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveService } from "./leave.service";
import { LocalService } from "../localService";

@Component({
    selector: "app-leave",
    templateUrl: "./leave.component.html",
    styleUrls: ['./leave.component.css']
})
export class LeaveComponent{

    constructor(private leaveService: LeaveService, private localService: LocalService){}

    ngOnInit() {
        
    }
    
    selectLeave= new FormControl('lastWeek', Validators.required)
    
    
}