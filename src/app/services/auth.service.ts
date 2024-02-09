import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    isLoggedIn: boolean = false;

    userService: UserService = inject(UserService);
    router: Router = inject(Router);
    route: ActivatedRoute = inject(ActivatedRoute);


    login(username: string, password: string){
        let user = this.userService.addedUser.find((u)=>u.username === username && u.password === password);

        if(user === undefined){
            this.isLoggedIn = false;
        }else{
            this.isLoggedIn = true;
        }
        return user;
    }

    logout(){
        this.isLoggedIn = false;
    }

    isAuthenticated(){
        return this.isLoggedIn;
    }

    onDashboard(){
        this.router.navigate(['/head/dashboard/edit'], {queryParams: {id: this.userService.getUserID()}});
    }
}