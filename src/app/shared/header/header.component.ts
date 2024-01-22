import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../components/login/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private router : Router, private route: ActivatedRoute, private userService: UserService){ }
    title: string = "Angular";
    username: string = "";
    showButton: boolean = false;

    ngOnInit(){
        this.username = this.userService.username;
    }

    onAbout(){
    }

    onDashboard(){
        
        this.router.navigate(['/head/dashboard/edit']);
        this.showButton = true;
       
    }

    onHome(){
        this.router.navigate(['/head/home']);
        this.showButton = false;
    }

    onLogout(){
        this.router.navigate(['/login'])
    }

    
}