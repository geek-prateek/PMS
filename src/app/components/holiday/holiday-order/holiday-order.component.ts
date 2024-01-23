import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-holiday-order',
    templateUrl: './holiday-order.component.html',
})

export class HolidayOrderComponent{

    yearRange: string = "";
    
    constructor() { }
    

    holidayOrder = new FormControl('');


    holidayList = [
        {
            yearRange: '2019-2020', 
        },
        {
            yearRange: '2019-2020', 
        },
        {
            yearRange: '2019-2020', 
        },
        {
            yearRange: '2019-2020', 
        },
        {
            yearRange: '2019-2020', 
        },
    ]

    
}