import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SortingPipe } from "../dashboard/sorting.pipe";
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    

    
}