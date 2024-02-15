import { Injectable } from "@angular/core";
import { DsrDetails } from "../components/dsr/tableDetails";
import { WorkDetails } from "../components/dashboard/workDetails";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private _http: HttpClient){}
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

    // addDsrDetails(data: DsrDetails): Observable<any>{
    //     return this._http.post('http://localhost:3000/dsrDetails', data);
    // }

    // getDsrDetails(): Observable<any>{
    //     return this._http.get('http://localhost:3000/dsrDetails');
    // }

    deleteDsrDetails(item: number){
        this.dsrtable.splice(item,1);
    }

    workDetails: WorkDetails[]=[];

    addWorkDetails(item: WorkDetails): Observable<any>{
        return this._http.post('http://localhost:3000/workData', item);
    }

    getWorkDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/workData');
    }

    deleteWorkDetails(item: number): Observable<any>{
        return this._http.delete(`http://localhost:3000/workData/${item}`);
    }

    editWorkDetails(item: number){

    }
}