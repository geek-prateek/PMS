import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoutingService } from 'src/app/services/routing.service';
import { UserService } from 'src/app/services/user.service';
import { WorkDetails } from 'src/app/Model/workDetails';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styles: [
    `
    
      .action > button {
        
        float: right;
        display: flex;
        margin-left: 10px;
        
      }
      .group-backdrop{
        background: rgba(0, 0, 0, 0);
      }
    `,
  ],
})
export class EmpAddEditComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private _http: HttpClient,
    private userService: UserService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private routing : RoutingService
  ) {}

  addForm: FormGroup = new FormGroup({});
  ngOnInit() {
    this.addForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
    });
    this.addForm.patchValue(this.data);
  }

  onAdd() {
    if (this.addForm.valid) {
      if (this.data) {
        const addFormDetails: WorkDetails={
          userId: this.userService.getUserID(),
          companyName: this.addForm.value.companyName,
          jobTitle: this.addForm.value.jobTitle,
          from: this.addForm.value.from,
          to: this.addForm.value.to,
        }
        this.dashboardService
          .updateWorkDetails(this.data.id, addFormDetails)
          .subscribe({
            next: (data) => {
              console.log(data);
              this.routing.openSnackBar('Updated Successfully', 'Close')
              this._dialogRef.close(true);
            },
            error: (err) => {
              console.log(err);
            },
          });
      } else {
        this.addWorkDetails();
      }
    }

    // const addFormDetails: WorkDetails={
    //     companyName: this.addForm.value.companyName,
    //     jobTitle: this.addForm.value.jobTitle,
    //     from: this.addForm.value.from,
    //     to: this.addForm.value.to,
    // }
    // this.dashboardService.workDetails.push(addFormDetails);
    this.onReset();
  }

  addWorkDetails() {
    const addFormDetails: WorkDetails={
        userId: this.userService.getUserID(),
        companyName: this.addForm.value.companyName,
        jobTitle: this.addForm.value.jobTitle,
        from: this.addForm.value.from,
        to: this.addForm.value.to,
    }

    this.dashboardService.addWorkDetails(addFormDetails).subscribe({
      next: (data) => {
        console.log(data);
        this.routing.openSnackBar('Added Successfully', 'Close')
        this._dialogRef.close(true);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onReset() {
    this.addForm.reset({
      companyName: '',
      jobTitle: '',
      from: null,
      to: null,
    });
  }
}
