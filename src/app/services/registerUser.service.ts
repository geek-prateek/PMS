import { Injectable } from "@angular/core";
import { RegisterUserDetails } from "../shared/registerUser/registerUserDetails.modal";
import { LocalService } from "src/app/services/localService";

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService{

    constructor(private localService: LocalService){}

    registerUserDetails: RegisterUserDetails[]=[];
}