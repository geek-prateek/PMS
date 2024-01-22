import { Injectable } from "@angular/core";
import { RegisterUserDetails } from "./registerUserDetails.modal";

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService{
    registerUserDetails: RegisterUserDetails[]=[];
}