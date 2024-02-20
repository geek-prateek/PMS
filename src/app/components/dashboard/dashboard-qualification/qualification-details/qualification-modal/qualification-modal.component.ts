import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DashboardService } from "../../../../../services/dashboard.service";
import { WorkDetails } from "../../../../../Model/workDetails";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-qualification-modal',
    templateUrl: './qualification-modal.component.html'
})
export class QualificationModalComponent {

    constructor(private dashboardService: DashboardService, private _http: HttpClient){}
    
    addForm: FormGroup= new FormGroup({})
    ngOnInit(){
        this.addForm= new FormGroup({
            companyName: new FormControl('', Validators.required),
            jobTitle: new FormControl('', Validators.required),
            from: new FormControl(null, Validators.required),
            to: new FormControl(null, Validators.required),
        });

    }

    onAdd(){
        this.addWorkDetails();
        // const addFormDetails: WorkDetails={
        //     companyName: this.addForm.value.companyName,
        //     jobTitle: this.addForm.value.jobTitle,
        //     from: this.addForm.value.from,
        //     to: this.addForm.value.to,
        // }
        // this.dashboardService.workDetails.push(addFormDetails);
        this.onReset();
    }

    addWorkDetails(){
        this.dashboardService.addWorkDetails(this.addForm.value).subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    

    onReset(){
        this.addForm.reset({
            companyName: '',
            jobTitle: '',
            from: null,
            to: null
        })
    }

    
}