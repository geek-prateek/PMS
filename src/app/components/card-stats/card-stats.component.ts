import { Component, ViewChild } from "@angular/core";
import { HolidayComponent } from "../holiday/holiday.component";
import { HolidayService } from "../../services/holiday.service";
import { LeaveService } from "src/app/services/leave.service";
import { UserService } from "src/app/services/user.service";
import { RegisterUserService } from "src/app/services/registerUser.service";
import { Router } from "@angular/router";
import { RoutingService } from "src/app/services/routing.service";

@Component({
    selector: 'app-card-stats',
    templateUrl: './card-stats.component.html',
    styles: [
        `
        .card-stats .card-body {
            padding: 0.9375rem 20px;
        
        }
        .bi{
            font-size: 2rem;
        
        }
        .icon-big{
            border-radius: 50%;
            padding: 10px;
        }`
    ]
})
export class CardStatsComponent {
    leaveLeft: Number = 0;
    holidayLeft: Number = 0;
    dayLeftforPayroll: Number = 0;
    today: Date = new Date();
    lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);

    constructor(private holidayService: HolidayService, private leaveService: LeaveService, private userService: UserService, private routing: RoutingService) { }
    ngOnInit() {
        if(this.lastDayOfMonth.getDay() < 6){
            this.dayLeftforPayroll = this.lastDayOfMonth.getDate() - this.today.getDate();
        }else{
            if(this.lastDayOfMonth.getDay() == 6){
                this.dayLeftforPayroll = (this.lastDayOfMonth.getDate() - this.today.getDate())-1;
            }
            else{
                this.dayLeftforPayroll = (this.lastDayOfMonth.getDate() - this.today.getDate())-2;
            }
        }
        this.holidayLeft = this.holidayService.nextHoliday;
        console.log(this.holidayService.nextHoliday);

        this.leaveLeft = this.leaveService.getLeaveCount(this.userService.name);
    }

    onDashboard(){
        this.routing.onDashboard();
    }

    onHoliday(){
        this.routing.onHoliday();
    }

    onLeave(){
        this.routing.onLeave();
    }
}