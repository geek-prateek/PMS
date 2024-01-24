import { Component, ViewChild } from "@angular/core";
import { HolidayDetails } from "./holidayDetails";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
    selector: 'app-holiday',
    templateUrl: './holiday.component.html',
    styleUrls: ['./holiday.component.css']
})
export class HolidayComponent {

    pageSize: number=10;
    currentPage: number = 0;

    lowValue: number = 0;
    highValue: number = 20;

    constructor() { }
    ngOnInit() {
    }

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
            holidayDate: new Date("07-Apr-2023"),
            holiday: "Friday",
            holidayName: "Good Friday"
        },
        {
            srNo: 4,
            holidayDate: new Date("15-Aug-2023"),
            holiday: "Tuesday",
            holidayName: "Independence Day"
        },
        {
            srNo: 5,
            holidayDate: new Date("30-Aug-2023"),
            holiday: "Wednesday",
            holidayName: "Raksha Bandhan"
        },
        {
            srNo: 6,
            holidayDate: new Date("07-Sep-2023"),
            holiday: "Thursday",
            holidayName: "Janmashtami"
        },
        {
            srNo: 7,
            holidayDate: new Date("02-Oct-2023"),
            holiday: "Monday",
            holidayName: "Mahatma Gandhi Jayanti"
        },
        {
            srNo: 8,
            holidayDate: new Date("24-Oct-2023"),
            holiday: "Tuesday",
            holidayName: "Dussehra"
        },
        {
            srNo: 9,
            holidayDate: new Date("13-Nov-2023"),
            holiday: "Monday",
            holidayName: "Diwali"
        },
        {
            srNo: 10,
            holidayDate: new Date("25-Dec-2023"),
            holiday: "Monday",
            holidayName: "Christmas Day"
        },
        
    ];


    onPageChanged(event : PageEvent){
        this.lowValue = event.pageIndex * event.pageSize;
        this.highValue = this.lowValue + event.pageSize;
        return event;
    }
}