import { RegisterUserDetails } from "src/app/shared/registerUser/registerUserDetails.modal";

export class UserDetails{
    usertype: string;
    username: string;
    password: string;
    userDetail: RegisterUserDetails | null | undefined;
    constructor(usertype: string, username: string, password: string){
        this.usertype = usertype;
        this.username = username;
        this.password = password;
    }
}