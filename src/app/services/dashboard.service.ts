import { Injectable } from "@angular/core";
import { DsrDetails } from "../Model/DsrDetails";
import { WorkDetails } from "../Model/workDetails";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TicketsDetails } from "../Model/ticketsDetails";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private _http: HttpClient){}

    search: string = "";
    order: string = "";
    dsrtable: DsrDetails[]=[];

    addDsrDetails(data: DsrDetails): Observable<any>{
        return this._http.post('http://localhost:3000/dsrData', data);
    }

    updateDsrDetails(id: number, item: DsrDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/dsrData/${id}`, item);
    }

    getDsrDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/dsrData');
    }

    deleteDsrDetails(item: number): Observable<any>{
        return this._http.delete(`http://localhost:3000/dsrData/${item}`);
    }

    workDetails: WorkDetails[]=[];

    addWorkDetails(item: WorkDetails): Observable<any>{
        return this._http.post('http://localhost:3000/workData', item);
    }

    updateWorkDetails(id: number, item: WorkDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/workData/${id}`, item);
    }

    getWorkDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/workData');
    }

    deleteWorkDetails(item: number): Observable<any>{
        return this._http.delete(`http://localhost:3000/workData/${item}`);
    }

    ticketsDetails: TicketsDetails[]=[];

    addTicketsDetails(item: TicketsDetails): Observable<any>{
        return this._http.post('http://localhost:3000/ticketData', item);
    }

    updateTicketsDetails(id: number, item: TicketsDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/ticketData/${id}`, item);
    }

    getTicketsDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/ticketData');
    }

    deleteTicketsDetails(item: number): Observable<any>{
        return this._http.delete(`http://localhost:3000/ticketData/${item}`);
    }

}