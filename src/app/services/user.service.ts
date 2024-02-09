import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDetails } from "../components/login/userDetails";

@Injectable()
export class UserService {

    username: string ="";

    constructor(private router: Router, private route: ActivatedRoute){}
        
    addedUser: UserDetails[] = [
       new UserDetails(1, 'admin', 'prateek', 'Prateek@123'),
       new UserDetails(2, 'superadmin', 'shoaib', 'Shoaib@123'),
       new UserDetails(3, 'superadmin', 'faizan', 'Faizan@123'),
       new UserDetails(4, 'superadmin', 'krutik', 'Krutik@123'),
       new UserDetails(5, 'admin', 'amod', 'Amod@123'),
    ]

    getUsertype() {
        const foundUser = this.addedUser.find(user => user.username === this.username);
        if(foundUser){
            localStorage.setItem('usertype', JSON.stringify(foundUser.usertype));
            return foundUser.usertype;
        }
        return undefined;
    }

    getUsernamefromId(id: number){
        const foundUser = this.addedUser.find(user => user.id === id);
        if(foundUser){
            return foundUser.username;
        }else{
            return '';
        }
        
    }

    getUserID(){
        const foundUser = this.addedUser.find(user => user.username === this.username);
        if(foundUser){
            localStorage.setItem('userid', JSON.stringify(foundUser.id));
            return foundUser.id;
        }
        return undefined;
    }

    logout(){
        this.username = '';
        this.router.navigate(['../login'], {relativeTo: this.route});
    }

}
