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
        {
            employeeName: "Shoaib Akhtar",
            startDate: new Date("12/25/2024"),
            endDate: new Date("1/2/2025"),
            leaveCount: 7,
        }
        
        
    ]
    getLeaveCount(username: string){
        const registerUser = this.localService.getData(username);
        let name = registerUser.name;
        console.log(name);
        
        let count = 15;
        this.leaveDetails.forEach((item) => {
            if (item.employeeName === name) {
                count -= item.leaveCount;
            }
        });
        return count;
    }

    
}