import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.onBasic();
    }

    onQualification(){
        this.router.navigate(['qualification'], {relativeTo: this.route})
    }

    onTeam(){
        this.router.navigate(['team'], {relativeTo: this.route})
    }

    onEdit(){
        this.router.navigate(['edit'], {relativeTo: this.route})
    }

    onBasic(){
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
}