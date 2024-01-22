import { Component, OnInit } from "@angular/core";
import { RegisterUserService } from "../../../shared/registerUser/registerUser.service";
import { BirthDetails } from "../birthDetails";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-birthday-table',
    templateUrl: './birthday-table.component.html',
    styleUrls: ['./birthday-table.component.css']
})
export class BirthdayTableComponent implements OnInit {

    constructor(private registerUser: RegisterUserService, private router: Router, private route: ActivatedRoute){}

    birthDetails: BirthDetails[] = [];
    todayDate: Date = new Date()

    ngOnInit(): void {
        this.birthDetails = this.registerUser.registerUserDetails;
       
        
    }

    onDashboard(){
        this.router.navigate(['../dashboard'], {relativeTo: this.route});
    }
}