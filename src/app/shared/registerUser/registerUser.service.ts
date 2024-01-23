import { Injectable } from "@angular/core";
import { RegisterUserDetails } from "./registerUserDetails.modal";
import { LocalService } from "src/app/components/localService";

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService{

    constructor(private localService: LocalService){}

    registerUserDetails: RegisterUserDetails[]=[];



}