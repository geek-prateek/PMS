import { Component, OnInit } from "@angular/core";
import { WorkDetails } from "../../workDetails";
import { DashboardService } from "../../../../services/dashboard.service";

@Component({
    selector: 'app-qualification-details',
    templateUrl: './qualification-details.component.html',
    styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetails implements OnInit{

    constructor(private dashboardService: DashboardService){}

    workDetails: WorkDetails[]=[];

    ngOnInit(){
        this.workDetails = this.dashboardService.workDetails;
    }

    onDelete(item: number){
        this.dashboardService.deleteWorkDetails(item);
    }

    onEdit(item: number){
        this.dashboardService.editWorkDetails(item);
    }
}