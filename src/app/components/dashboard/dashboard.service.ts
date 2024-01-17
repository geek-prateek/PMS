import { Injectable } from "@angular/core";
import { DsrDetails } from "./tableDetails";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    order: string = "";
    dsrtable: DsrDetails[]=[
        {
            date: new Date('2021-08-01'),
            timespent: 8,
            pendingHour: 0,
            status: "Pending"
        },
        {
            
            date: new Date('2021-08-02'),
            timespent: 8,
            pendingHour: 0,
            status: "Pending"
        },
        {
            date: new Date('2021-08-03'),
            timespent: 8,
            pendingHour: 0,
            status: "Completed"
        },
    ]
}