import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../login/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private router : Router, private route: ActivatedRoute, private userService: UserService){ }
    title: string = "Angular";
    username: string = "";

    ngOnInit(){
        this.username = this.userService.username;
    }

    onAbout(){
    }

    onDashboard(){
        this.router.navigate(['/dashboard'])
    }

    onLogout(){
        this.router.navigate(['/login'])
    }
}