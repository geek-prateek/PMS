import { RegisterUserDetails } from "src/app/Model/registerUserDetails";

export class UserDetails{
    id: number;
    usertype: string;
    username: string;
    password: string;
    userDetail: RegisterUserDetails | null | undefined;
    constructor(id: number, usertype: string, username: string, password: string){
        this.id = id;
        this.usertype = usertype;
        this.username = username;
        this.password = password;

    }
}