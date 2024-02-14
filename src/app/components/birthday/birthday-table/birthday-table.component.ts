import { Component, OnInit } from "@angular/core";
import { RegisterUserService } from "../../../services/registerUser.service";
import { BirthDetails } from "../birthDetails";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalService } from "../../../services/localService";
import { UserService } from "../../../services/user.service";

@Component({
    selector: 'app-birthday-table',
    templateUrl: './birthday-table.component.html',
    styleUrls: ['./birthday-table.component.css']
})
export class BirthdayTableComponent implements OnInit {

    constructor(private registerUser: RegisterUserService, private router: Router, private route: ActivatedRoute, private localService: LocalService, private userService: UserService){}

    birthDetails: BirthDetails[] = [];
    todayDate: Date = new Date();

    ngOnInit(): void {
        this.birthDetails.find((data) => {
            if(data.dob.getMonth() === this.todayDate.getMonth() && data.dob.getDate() === this.todayDate.getDate()){
                alert('Today is ' + data.name + "'s birthday")
            }
        });
        this.birthDetails = this.localService.getBirthdayData();
        // this.birthDetails.find((data) => {
        //     if(this.registerUser.getNameFromRegisteredUser() !== data.name){
        //         this.birthDetails = this.localService.getBirthdayData();
        //     }
        // });
    }

    onDashboard(){
        this.router.navigate(['../dashboard'], {relativeTo: this.route});
    }
}