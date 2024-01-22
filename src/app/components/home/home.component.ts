import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SortingPipe } from "../../shared/sorting.pipe";
import { DashboardService } from "../dashboard/dashboard.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent{
    constructor(private router: Router, private route: ActivatedRoute){}
    
    
}