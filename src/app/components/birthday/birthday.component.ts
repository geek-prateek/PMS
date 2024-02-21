import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BirthDetails } from "src/app/Model/birthDetails";
import { DashboardService } from "src/app/services/dashboard.service";
import { RegisterUserService } from "src/app/services/registerUser.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-birthday",
    templateUrl: "./birthday.component.html",
    styleUrls: ["../birthday/birthday-table/birthday-table.component.css"]
})
export class BirthdayComponent{
    month: string ="January";

    on: boolean = false;
    search: string = "";

    onSearch() {
        this.on = !this.on;
    }
    Out() {
        this.on = false;
        this.search = "";
    }


    constructor(private registerUser: RegisterUserService, private router: Router, private route: ActivatedRoute, private userService: UserService, private dashboardService: DashboardService){}

    birthDetails: BirthDetails[] = [];
    todayDate: Date = new Date();

    ngOnInit(): void {
        this.birthDetails.find((data) => {
            if(data.dob.getMonth() === this.todayDate.getMonth() && data.dob.getDate() === this.todayDate.getDate()){
                alert('Today is ' + data.name + "'s birthday")
            }
        });
        // this.birthDetails = this.localService.getBirthdayData();
    
        this.registerUser.getBirthdayDetails().subscribe({
            next: (data) => {
                this.birthDetails = data;
            },
            error: (err) => {
                console.log(err);
            }
        
        })
        // this.birthDetails.find((data) => {
        //     if(this.registerUser.getNameFromRegisteredUser() !== data.name){
        //         this.birthDetails = this.localService.getBirthdayData();
        //     }
        // });
    }
}