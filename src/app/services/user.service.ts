import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDetails } from "../Model/userDetails";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterUserDetails } from "../Model/registerUserDetails";
import { LocalService } from "./localService";

@Injectable()
export class UserService {

    username: string ="";
    addedUser: UserDetails[] = [];
    profileDetails: RegisterUserDetails[]=[];
    constructor(private router: Router, private route: ActivatedRoute, private _http: HttpClient, private localService: LocalService){
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

    // getUsernamefromId(id: number){
    //     const foundUser = this.addedUser.find(user => user.id === id);
    //     if(foundUser){
    //         console.log(foundUser.username);
    //         return foundUser.username;
    //     }else{
    //         return '';
    //     }
        
    // }

    getUserID(){
        const foundUser = this.addedUser.find(user => user.username === this.username);
        if(foundUser){
            localStorage.setItem('userid', JSON.stringify(foundUser.id));
            return foundUser.id;
        }
        return 0;
    }

    getUserDetailsByUserId(id: number){
        const foundUser = this.addedUser.find(user => user.id === id);
        if(foundUser){
            return foundUser;
        }
        return null;
    
    }

    updateUserDetails(id: number, item: UserDetails): Observable<any>{
        return this._http.put(`http://localhost:3000/userDetails/${id}`, item);
    }

    getUserDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/userDetails');
    }

    getUserDetailsById(id: number): Observable<any>{
        return this._http.get(`http://localhost:3000/userDetails/${id}`);
    }

    public getUserIdfromLocal(){
        const storedData = localStorage.getItem('userid');
        if(storedData){
            return JSON.parse(storedData);
        }else{
            return null;
        }
    }

    logout(){
        this.localService.clearAll();
        this.router.navigate(['../login'], { queryParams: { logout: true }, relativeTo: this.route });
    }


    

    addProfileDetails(item: RegisterUserDetails): Observable<any>{
        return this._http.post('http://localhost:3000/profileData', item);
    }

    updateProfileDetails(id: number, item: RegisterUserDetails): Observable<any>{
        return this._http.patch(`http://localhost:3000/profileData/${id}`, item);
    }

    getProfileDetails(): Observable<any>{
        return this._http.get('http://localhost:3000/profileData/');
    }

    getProfileDetailsById(id: number): Observable<any>{
        return this._http.get(`http://localhost:3000/profileData/${id}`);
    }

}
