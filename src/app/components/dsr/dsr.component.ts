import { Component } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-dsr',
    templateUrl: './dsr.component.html',
})
export class DsrComponent{
    constructor(private table: DashboardService, private router: Router, private route: ActivatedRoute){}

    order: string = "";

    selectDays= new FormControl('lastdays', Validators.required)
        
    ngOnInit() {
        this.table.order = this.order;
    }

    
}