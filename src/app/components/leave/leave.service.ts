import { Injectable } from "@angular/core";
import { LeaveDetails } from "./leaveDetails";

@Injectable({
    providedIn: "root"
})
export class LeaveService{
    leaveDetails: LeaveDetails[]=[
        {
            employeeName: "Prateek Kumar",
            startDate: new Date("12/2/2024"),
            endDate: new Date("12/2/2024"),
            leaveCount: 1,
        },
        
        
    ]
}