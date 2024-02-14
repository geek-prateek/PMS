import { Injectable } from "@angular/core";
import { RegisterUserDetails } from "../shared/registerUser/registerUserDetails.modal";
import { LocalService } from "src/app/services/localService";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService{

    constructor(private localService: LocalService, private userService: UserService){}

    registerUserDetails: RegisterUserDetails[]=[];

    getNameFromRegisteredUser(){
        const registerUser = this.localService.getData(this.userService.username);
        if(registerUser){
            return registerUser.name;
        }
    }
}