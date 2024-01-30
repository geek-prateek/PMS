import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DashboardService } from "../../../dashboard.service";
import { WorkDetails } from "../../../workDetails";

@Component({
    selector: 'app-qualification-modal',
    templateUrl: './qualification-modal.component.html'
})
export class QualificationModalComponent {

    constructor(private dashboardService: DashboardService){}

    addForm= new FormGroup({
        companyName: new FormControl('', Validators.required),
        jobTitle: new FormControl('', Validators.required),
        from: new FormControl(null, Validators.required),
        to: new FormControl(null, Validators.required),
    });

    onAdd(){
        const addFormDetails: WorkDetails={
            companyName: this.addForm.value.companyName,
            jobTitle: this.addForm.value.jobTitle,
            from: this.addForm.value.from,
            to: this.addForm.value.to,
        }
        this.dashboardService.workDetails.push(addFormDetails);
        this.addForm.reset({
            companyName: '',
            jobTitle: '',
            from: null,
            to: null
        });
    }

    
}