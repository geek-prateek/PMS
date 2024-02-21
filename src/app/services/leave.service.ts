import { Injectable } from "@angular/core";
import { LeaveDetails } from "../Model/leaveDetails";
import { LocalService } from "./localService";
import { UserService } from "./user.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class LeaveService{
    leaveDetails: LeaveDetails[]=[]

    constructor(private userService: UserService, private _http: HttpClient){
        
    }
    
    
    getLeaveCount(name: string){
        let count = 15;
        this.leaveDetails.forEach((item) => {
            if (item.employeeName === name) {
                count -= item.leaveCount;
            }
        });
        
        return count;
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