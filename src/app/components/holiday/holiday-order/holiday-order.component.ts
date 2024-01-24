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
            yearRange: '2023-2024', 
        },
        {
            yearRange: '2022-2023', 
        },
        {
            yearRange: '2021-2022', 
        },
        {
            yearRange: '2020-2021', 
        },
        {
            yearRange: '2019-2020', 
        },
    ]

    
}