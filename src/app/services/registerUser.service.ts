import { Injectable } from "@angular/core";
import { RegisterUserDetails } from "../Model/registerUserDetails";
import { LocalService } from "src/app/services/localService";
import { UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
}