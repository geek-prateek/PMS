import { Component, OnInit, ViewChild } from "@angular/core";
import { HolidayDetails } from "./holidayDetails";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { HolidayService } from "./holiday.service";

@Component({
    selector: 'app-holiday',
    templateUrl: './holiday.component.html',
    styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit{

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
}