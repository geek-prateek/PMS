import { Component, ViewChild } from "@angular/core";
import { HolidayComponent } from "../holiday/holiday.component";
import { HolidayService } from "../../services/holiday.service";
import { LeaveService } from "src/app/services/leave.service";

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
    leaveLeft: Number = 15;
    holidayLeft: Number = 0;
    dayLeftforPayroll: Number = 0;
    today: Date = new Date();
    lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);

    constructor(private holidayService: HolidayService, private leaveService: LeaveService) { }
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
    }
}