import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDetails } from "./userDetails";

@Injectable()
export class UserService {

    username: string ="";

    constructor(private router: Router, private route: ActivatedRoute){}
    
    // flag: boolean = false;
    
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



/* 
 {
            usertype: 'admin',
            username: 'prateek',
            password: 'Prateek@123'
        },
        {
            usertype: 'superadmin',
            username: 'shoaib',
            password: 'Shoaib@123'
        },
        {
            usertype: 'superadmin',
            username: 'faizan',
            password: 'Faizan@123'
        },
        {
            usertype: 'superadmin',
            username: 'krutik',
            password: 'Krutik@123'
        },
        {
            usertype: 'admin',                 
            username: 'amod',
            password: 'Amod@123'
        }
*/