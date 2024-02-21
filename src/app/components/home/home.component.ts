import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SortingPipe } from "../../shared/custom-pipe/sorting.pipe";
import { DashboardService } from "../../services/dashboard.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LeaveService } from "src/app/services/leave.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
    constructor(private router: Router, private route: ActivatedRoute, private leaveService: LeaveService, private userService: UserService){}
    ngOnInit(){
        
    }
}