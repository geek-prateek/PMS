import { Injectable } from "@angular/core";
import { RegisterUserDetails } from "../Model/registerUserDetails";
import { LocalService } from "src/app/services/localService";
import { UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BirthDetails } from "../Model/birthDetails";
import { CelebrationDetails } from "../Model/CelebrationDetails";

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService{

    constructor(private localService: LocalService, private userService: UserService, private _http: HttpClient){}

    registerUserDetails: RegisterUserDetails[]=[];

    // getNameFromRegisteredUser(){
    //     const registerUser = this.localService.getData(this.userService.username);
    //     if(registerUser){
    //         return registerUser.name;
    //     }
    // }

    // addEmployeeData(data: RegisterUserDetails): Observable<any>{
    //     return this._http.post('http://localhost:3000/employeeDetails', data);
    // }

    // getEmployeeData(): Observable<any>{
    //     return this._http.get('http://localhost:3000/employeeDetails');
    // }

    updateBirthdayDetails(id: number, item: BirthDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/birthdayData/${id}`, item);
    }
    getBirthdayDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/birthdayData');
    }

    updateWorkAnniversaryDetails(id: number, item: CelebrationDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/workAnniversaryData/${id}`, item);
    }
    getWorkAnniversaryDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/workAnniversaryData');
    }

}