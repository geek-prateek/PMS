import { Component } from "@angular/core";
import { HolidayDetails } from "./holidayDetails";

@Component({
    selector: 'app-holiday',
    templateUrl: './holiday.component.html',
    styleUrls: ['./holiday.component.css']
})
export class HolidayComponent {
    constructor() { }
    ngOnInit() {
    }

    holidayDetails: HolidayDetails[]=[
        {
            srNo: 1,
            holidayDate: new Date("2024-01-26"),
            holiday: "Friday",
            holidayName: "Republic Day"
        },
        {
            srNo: 2,
            holidayDate: new Date("2024-01-26"),
            holiday: "Friday",
            holidayName: "Republic Day"
        },
        {
            srNo: 3,
            holidayDate: new Date("2024-01-26"),
            holiday: "Friday",
            holidayName: "Republic Day"
        },
        {
            srNo: 4,
            holidayDate: new Date("2024-01-26"),
            holiday: "Friday",
            holidayName: "Republic Day"
        },
        {
            srNo: 5,
            holidayDate: new Date("2024-01-26"),
            holiday: "Friday",
            holidayName: "Republic Day"
        }
    ];
}