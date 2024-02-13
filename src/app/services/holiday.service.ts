import { Injectable, OnInit } from "@angular/core";
import { HolidayDetails } from "../components/holiday/holidayDetails";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class HolidayService implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute)
    {
        this.nextHoliday = this.days_between(this.todayDate, this.holidayDate);
        console.log(this.nextHoliday);
    }
    HolidayDetails: HolidayDetails[]=[];

    todayDate: Date = new Date();
    holidayDate: Date = new Date("2024-04-07");
    nextHoliday: Number = 0;

    holidayDetails: HolidayDetails[]=[
        {
            srNo: 1,
            holidayDate: new Date("01-Jan-2024"),
            holiday: "Monday",
            holidayName: "New Year's Day"
        },
        {
            srNo: 2,
            holidayDate: new Date("26-Jan-2024"),
            holiday: "Friday",
            holidayName: "Republic Day"
        },
        {
            srNo: 3,
            holidayDate: new Date("07-Apr-2024"),
            holiday: "Friday",
            holidayName: "Good Friday"
        },
        {
            srNo: 4,
            holidayDate: new Date("15-Aug-2024"),
            holiday: "Tuesday",
            holidayName: "Independence Day"
        },
        {
            srNo: 5,
            holidayDate: new Date("30-Aug-2024"),
            holiday: "Wednesday",
            holidayName: "Raksha Bandhan"
        },
        {
            srNo: 6,
            holidayDate: new Date("07-Sep-2024"),
            holiday: "Thursday",
            holidayName: "Janmashtami"
        },
        {
            srNo: 7,
            holidayDate: new Date("02-Oct-2024"),
            holiday: "Monday",
            holidayName: "Mahatma Gandhi Jayanti"
        },
        {
            srNo: 8,
            holidayDate: new Date("24-Oct-2024"),
            holiday: "Tuesday",
            holidayName: "Dussehra"
        },
        {
            srNo: 9,
            holidayDate: new Date("13-Nov-2024"),
            holiday: "Monday",
            holidayName: "Diwali"
        },
        {
            srNo: 10,
            holidayDate: new Date("25-Dec-2024"),
            holiday: "Monday",
            holidayName: "Christmas Day"
        },
        
    ];

    ngOnInit() {
        // this.getHolidayDetails().subscribe((data: HolidayDetails[])=>{
        //     this.HolidayDetails = data;
        // })
        this.HolidayDetails = this.route.snapshot.data['holidayDetails'];
        
    }

    getHolidayDetails(): Observable<HolidayDetails[]> {
        return new Observable<HolidayDetails[]>((sub)=>{
            setTimeout(()=>{
                sub.next(this.holidayDetails);
            },1000)
        })
    }

    days_between(date1: any, date2: any): number {

        // The number of milliseconds in one day
        const ONE_DAY = 1000 * 60 * 60 * 24;
    
        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1 - date2);
    
        // Convert back to days and return
        return Math.round(differenceMs / ONE_DAY);
    
    }

}