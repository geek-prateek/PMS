import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { min } from "rxjs";

@Component({
    selector: 'app-add-dsr',
    templateUrl: './addDsr.component.html',
    styleUrls: ['./addDsr.component.css']
})
export class AddDsrComponent implements OnInit{
    hourSpent: number = 0;
    minuteSpent: number = 0;
    todayDate: string = '';

    addDsrForm = new FormGroup({
        department: new FormControl('development', Validators.required),
        client: new FormControl(null, Validators.required),
        project: new FormControl(null, Validators.required),
        taskType: new FormControl(null, Validators.required),
        hour: new FormControl(0, [Validators.required,Validators.min(0), Validators.max(23)]),
        minute: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(59)]),
        taskKey: new FormControl(null, Validators.required),
        dueDate: new FormControl(null, Validators.required),
        dsrDetails: new FormControl(null, Validators.required),
    })

    ngOnInit() {
        const date = new Date();
        this.todayDate = date.toLocaleDateString();
    }
}