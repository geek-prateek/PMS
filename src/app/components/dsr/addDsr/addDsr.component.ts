import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { min } from "rxjs";
import { DsrDetails } from "../../dashboard/tableDetails";
import { DashboardService } from "../../dashboard/dashboard.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-add-dsr',
    templateUrl: './addDsr.component.html',
    styleUrls: ['./addDsr.component.css']
})
export class AddDsrComponent implements OnInit{
    hourSpent: number = 0;
    minuteSpent: number = 0;
    todayDate: string = '';
    checked: string = "Pending";

    constructor(private table: DashboardService, private router: Router, private route: ActivatedRoute){}

    addDsrForm = new FormGroup({
        dsrDate: new FormControl(null, Validators.required),
        department: new FormControl('development', Validators.required),
        client: new FormControl('client', Validators.required),
        project: new FormControl('project', Validators.required),
        taskType: new FormControl('taskType', Validators.required),
        hour: new FormControl(0, [Validators.required,Validators.min(0), Validators.max(23)]),
        minute: new FormControl(0, [Validators.min(0), Validators.max(59)]),
        taskKey: new FormControl(null),
        dueDate: new FormControl(null),
        dsrDetails: new FormControl(null, Validators.required),
    })

    ngOnInit() {
        const date = new Date();
        this.todayDate = date.toLocaleDateString();
    }

    onPublish(){
        if(this.addDsrForm.valid){
            const addDsrDetails: DsrDetails ={
                date: this.addDsrForm.value.dsrDate,
                timespent: this.addDsrForm.value.hour,
                pendingHour: this.addDsrForm.value.minute,
                status: this.checked,
            };
            this.table.dsrtable.push(addDsrDetails);
            this.router.navigate(['/home'])
            console.log(addDsrDetails.date, addDsrDetails.timespent, addDsrDetails.pendingHour, addDsrDetails.status);
        }
    }

}