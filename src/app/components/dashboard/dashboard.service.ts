import { Injectable } from "@angular/core";
import { DsrDetails } from "./tableDetails";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    order: string = "";
    dsrtable: DsrDetails[]=[
        {
            id: 1,
            date: new Date('2021-08-01'),
            timespent: 8,
            pendingHour: 0
        },
        {
            id: 2,
            date: new Date('2021-08-02'),
            timespent: 8,
            pendingHour: 0
        },
        {
            id: 3,
            date: new Date('2021-08-03'),
            timespent: 8,
            pendingHour: 0
        },
    ]
}