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
        {
            employeeName: "Shoaib Akhtar",
            startDate: new Date(),
            endDate: new Date(),
            leaveCount: 1,
        },
        {
            employeeName: "Amod Shah",
            startDate: new Date("12/5/2024"),
            endDate: new Date("12/5/2024"),
            leaveCount: 1,
        },
        {
            employeeName: "Krutik Vaishnav",
            startDate: new Date("10/22/2024"),
            endDate: new Date("10/22/2024"),
            leaveCount: 1,
        },
        {
            employeeName: "Faizan Sheik",
            startDate: new Date("8/12/2024"),
            endDate: new Date("8/12/2024"),
            leaveCount: 1,
        },
        {
            employeeName: "Dev",
            startDate: new Date(),
            endDate: new Date(),
            leaveCount: 1,
        },
        
    ]
}