import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveService } from "./leave.service";

@Component({
    selector: "app-leave",
    templateUrl: "./leave.component.html",
    styleUrls: ['./leave.component.css']
})
export class LeaveComponent{

    constructor(private leaveService: LeaveService){}

    
    selectLeave= new FormControl(null)
    
    
}