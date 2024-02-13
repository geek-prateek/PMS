import { Injectable } from "@angular/core";
import { DsrDetails } from "../components/dsr/tableDetails";
import { WorkDetails } from "../components/dashboard/workDetails";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    order: string = "";
    dsrtable: DsrDetails[]=[
        {
            date: new Date("2/11/2024"),
            timespent: 8,
            minute: 30,
            pendingHour: 0,
            status: "Pending"
        },
        {
            date: new Date("2/12/2024"),
            timespent: 9,
            minute: 0,
            pendingHour: 0,
            status: "Approved"
        }
    ];

    workDetails: WorkDetails[]=[];

    addWorkDetails(item: WorkDetails){
        this.workDetails.push(item);
    }

    deleteWorkDetails(item: number){
        this.workDetails.splice(item,1);
    }

    deleteDsrDetails(item: number){
        this.dsrtable.splice(item,1);
    }

    editWorkDetails(item: number){

    }
}