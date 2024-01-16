import { Component } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-dsr',
    templateUrl: './dsr.component.html',
})
export class DsrComponent{
    constructor(private table: DashboardService){}

    order: string = "";

    homeForm = new FormGroup({
        selectDays: new FormControl(null, Validators.required),
        
    })

    ngOnInit() {
        this.table.order = this.order; 
    }
}