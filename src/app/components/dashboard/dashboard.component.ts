import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { RegisterUserService } from "src/app/shared/registerUser/registerUser.service";
import { LocalService } from "../localService";
import { UserService } from "../login/user.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    constructor(private router: Router, private route: ActivatedRoute, private localService: LocalService, private userService: UserService){}

    name: string = '';
    email: string = '';
    role: string = '';
    department: string = '';

    ngOnInit(): void {
        this.onBasic();
        this.name = this.localService.getData(this.userService.username).name || this.name;
        this.email = this.localService.getData(this.userService.username).email;
        this.role = this.localService.getData(this.userService.username).userRole;
        this.department = this.localService.getData(this.userService.username).department;

    }

    onQualification(){
        this.router.navigate(['qualification'], {relativeTo: this.route})
    }

    onTeam(){
        this.router.navigate(['team'], {relativeTo: this.route})
    }
    
    onBasic(){
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
    
}