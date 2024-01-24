import { Component, DoCheck, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { min } from "rxjs";
import { DsrDetails } from "../tableDetails";
import { DashboardService } from "../../dashboard/dashboard.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-add-dsr',
    templateUrl: './addDsr.component.html',
    styleUrls: ['./addDsr.component.css']
})
export class AddDsrComponent implements OnInit, DoCheck{
    hourSpent: number =0;
    minuteSpent: number =0;
    todayDate: string = '';
    pendingHourTime: number = 0;
    checked: string = "Pending";

    constructor(private table: DashboardService, private router: Router, private route: ActivatedRoute){}

    addDsrForm = new FormGroup({
        dsrDate: new FormControl(null, Validators.required),
        department: new FormControl('development', Validators.required),
        client: new FormControl('client', Validators.required),
        project: new FormControl('project', Validators.required),
        taskType: new FormControl('taskType', Validators.required),
        hour: new FormControl(0, [Validators.required,Validators.min(8), Validators.max(23)]),
        minute: new FormControl(0, [Validators.min(0), Validators.max(59)]),
        taskKey: new FormControl(null),
        dueDate: new FormControl(null),
        dsrDetails: new FormControl(null, Validators.required),
    })

    ngOnInit() {
        const date = new Date();
        this.todayDate = date.toLocaleDateString();
    }

    ngDoCheck(){
        
        this.hourSpent = this.addDsrForm.value.hour || 0;
        this.minuteSpent = this.addDsrForm.value.minute || 0;
    }

    onAddTask(){
        
    }


    onPublish(){
        
        if(this.addDsrForm.valid){
            this.pendingHourTime = (8-this.hourSpent) > 0 ? (8-this.hourSpent):0;
            const addDsrDetails: DsrDetails ={
                date: this.addDsrForm.value.dsrDate,
                timespent: this.addDsrForm.value.hour,
                minute: this.addDsrForm.value.minute,
                pendingHour: this.pendingHourTime,
                status: this.checked,
            };
            this.table.dsrtable.push(addDsrDetails);
            this.pendingHourTime=0;
            console.log(addDsrDetails.date, addDsrDetails.timespent, addDsrDetails.minute, addDsrDetails.pendingHour, addDsrDetails.status);
        }
    }

}