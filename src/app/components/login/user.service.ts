import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDetails } from "./userDetails";

@Injectable()
export class UserService {

    username: string ="";

    constructor(private router: Router, private route: ActivatedRoute){}
        
    addedUser: UserDetails[] = [
       new UserDetails('admin', 'prateek', 'Prateek@123'),
       new UserDetails('superadmin', 'shoaib', 'Shoaib@123'),
       new UserDetails('superadmin', 'faizan', 'Faizan@123'),
       new UserDetails('superadmin', 'krutik', 'Krutik@123'),
       new UserDetails('admin', 'amod', 'Amod@123'),
    ]

    getUsertype() {
        const foundUser = this.addedUser.find(user => user.username === this.username);
        if(foundUser){
            localStorage.setItem('usertype', JSON.stringify(foundUser.usertype));
            return foundUser.usertype;
        }
        return undefined;
    }


    logout(){
        this.username = '';
        this.router.navigate(['../login'], {relativeTo: this.route});
    }

}
