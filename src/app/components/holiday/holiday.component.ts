import { Component, OnInit, ViewChild } from "@angular/core";
import { HolidayDetails } from "../../Model/holidayDetails";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { HolidayService } from "../../services/holiday.service";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
    selector: 'app-holiday',
    templateUrl: './holiday.component.html',
    styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit{
    
    value: Date = new Date();
    pageSize: number=10;
    currentPage: number = 0;
    holidayDetails: HolidayDetails[] = [];
    lowValue: number = 0;
    highValue: number = 20;

    constructor(private router: Router, private route: ActivatedRoute, private holidayService: HolidayService) { }

    ngOnInit() {
        this.holidayDetails = this.holidayService.holidayDetails;
    }

    onPageChanged(event : PageEvent){
        this.lowValue = event.pageIndex * event.pageSize;
        this.highValue = this.lowValue + event.pageSize;
        return event;
    }
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: this.handleDateClick.bind(this),
        events: [
            { title: 'Happy New Year', date: '2024-01-01' },
            { title: 'Republic Day', date: '2024-01-26' },
            { title: 'Good Friday', date: '2024-04-07' },
            { title: 'Independence Day', date: '2024-08-15' },
            { title: 'Raksha Bandhan', date: '2024-08-30' },
            { title: 'Janmashtami', date: '2024-09-07' },
            { title: 'Mahatma Gandhi Jayanti', date: '2024-10-02' },
            { title: 'Dussehra', date: '2024-10-24'},
            { title: 'Diwali', date: '2024-11-13' },
            { title: 'Christmas', date: '2024-12-25' },
            
        ]
    };
    handleDateClick(arg:any) {
        alert('date click! ' + arg.dateStr);
    }

    
}