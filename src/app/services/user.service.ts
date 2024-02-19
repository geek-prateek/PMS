import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDetails } from "../components/login/userDetails";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

    username: string ="";
    addedUser: UserDetails[] = [];
    constructor(private router: Router, private route: ActivatedRoute, private _http: HttpClient){
        this.getUserDetails().subscribe({
            next: (data) => {
                this.addedUser = data;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
        
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
        return 0;
    }

    updateUserDetails(id: number, item: UserDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/userDetails/${id}`, item);
    }

    getUserDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/userDetails');
    }

    logout(){
        this.username = '';
        this.router.navigate(['../login'], {relativeTo: this.route});
    }

}
