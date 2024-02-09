import { Injectable } from "@angular/core";
import { LeaveDetails } from "../components/leave/leaveDetails";
import { LocalService } from "./localService";

@Injectable({
    providedIn: "root"
})
export class LeaveService{

    constructor(private localService: LocalService){}
    leaveDetails: LeaveDetails[]=[
        {
            employeeName: "Prateek Kumar",
            startDate: new Date("12/2/2024"),
            endDate: new Date("12/2/2024"),
            leaveCount: 1,
        },
        
        
    ]
    

    
}