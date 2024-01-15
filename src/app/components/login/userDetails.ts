export class UserDetails{
    usertype: string;
    username: string;
    password: string;

    constructor(usertype: string, username: string, password: string){
        this.usertype = usertype;
        this.username = username;
        this.password = password;
    }
}