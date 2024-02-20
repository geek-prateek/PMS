import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { RegisterUserService } from "src/app/services/registerUser.service";
import { LocalService } from "../../services/localService";
import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { DashboardEditComponent } from "./dashboard-edit/dashboard-edit.component";

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
        this.updateProfile();
        
    }

    updateProfile(){
        this.userService.getProfileDetailsById(this.userService.getUserIdfromLocal()).subscribe({
            next: (data) => {
                this.name = data.name;
                this.email = data.email;
                this.role = data.userRole;
                this.department = data.department;
            },
            error: (err) => {
                console.log(err);
            }
        });
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