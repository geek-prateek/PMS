import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
    selector: "app-search",
    template: 
    `
    <ng-content></ng-content>
   
    `,

})
export class SearchComponent implements OnInit {
    constructor(private dashboardService: DashboardService) {}
    
    
    ngOnInit() {
        // this.dashboardService.search = this.search;
        // console.log(this.dashboardService.search);
        
    }
   
}