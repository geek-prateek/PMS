import { Injectable } from "@angular/core";
import { LeaveDetails } from "../Model/leaveDetails";
import { LocalService } from "./localService";
import { UserService } from "./user.service";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class LeaveService{
    leaveDetails: LeaveDetails[]=[]

    constructor( private _http: HttpClient){
        console.log(this.leaveDetails);
    }
    
    
    
    
    getLeaveCount(name: string): Observable<number> {
        return this.getLeaveDetails().pipe(
        map((leaveData: any[]) => {
            let count = 15;
            leaveData.forEach((item) => {
            if (item.employeeName === name) {
                count -= item.leaveCount;
            }
            });
            return count;
        })
        );
    }


    addLeaveDetails(item: LeaveDetails): Observable<any>{
        return this._http.post('http://localhost:3000/leaveData', item);
    }

    getLeaveDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/leaveData/');
    }

    getLeaveDetailsById(id: number): Observable<any>{
        return this._http.get(`http://localhost:3000/leaveData/${id}`);
    }

    getLeaveDetailsByUsername(username: string): Observable<any>{
        return this._http.get(`http://localhost:3000/leaveData/?username=${username}`);
    }

    
}