import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DsrDetails } from 'src/app/Model/tableDetails';
import { DashboardService } from 'src/app/services/dashboard.service';
import { RoutingService } from 'src/app/services/routing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-dsr-list',
  templateUrl: './addDsrList.component.html',
  styleUrls: ['./addDsrList.component.css'],
})
export class AddDsrListComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private _http: HttpClient,
    private userService: UserService,
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddDsrListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private routing: RoutingService
  ) {}
  hourSpent: number = 0;
  minuteSpent: number = 0;
  todayDate: Date = new Date();
  pendingHourTime: number = 0;
  checked: string = 'Pending';
  userId: number = this.userService.getUserIdfromLocal();
  addDsrForm: FormGroup = new FormGroup({});

  ngOnInit() {
    // const date = new Date();
    // this.todayDate = date.toLocaleDateString();
    this.addDsrForm = this.fb.group({
      dsrDate: [null, Validators.required],
      newDsr: this.fb.array([this.addDsrFormGroup()]),
    });
    this.addDsrForm.patchValue(this.data);

    this.addDsrForm.get('newDsr')?.valueChanges.subscribe(() => {
      this.updateSpentTime();
    });
  }

  // ngAfterViewInit() {
  //   this.dsrTable.getDsrDetails();
  // }
  get newDsrControls() {
    return (this.addDsrForm.get('newDsr') as FormArray).controls;
  }

  getDsrDetails() {
    this.dashboardService.getDsrDetails().subscribe({
      next: (data) => {
        const filteredData = data.filter((element: any) => element.userId === this.userId);
                this.dashboardService.dsrtable = filteredData;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addDsrFormGroup() {
    return this.fb.group({
      department: ['development', Validators.required],
      client: ['', Validators.required],
      project: ['', Validators.required],
      taskType: ['', Validators.required],
      hour: [0, [Validators.required, Validators.min(8), Validators.max(23)]],
      minute: [0, [Validators.min(0), Validators.max(59)]],
      taskKey: [null],
      dueDate: [null],
      dsrDetails: [null, Validators.required],
    });
  }

  onAddTask() {
    (this.addDsrForm.get('newDsr') as FormArray).push(this.addDsrFormGroup());
  }

  onDelete(item: number) {
    (this.addDsrForm.get('newDsr') as FormArray).removeAt(item);
  }

  onPublish() {
    if (this.addDsrForm.valid) {
      if (this.data) {
        this.pendingHourTime = Math.max(8 - this.hourSpent, 0);
        const addDsrDetails: DsrDetails = {
          id: this.data.id,
          userId: this.userService.getUserIdfromLocal(),
          date: this.addDsrForm.value.dsrDate,
          timespent: this.hourSpent,
          minute: this.minuteSpent,
          pendingHour: this.pendingHourTime,
          status: this.checked,
        };
        this.dashboardService
          .updateDsrDetails(this.data.id, addDsrDetails)
          .subscribe({
            next: (data) => {
              console.log(data);
              console.log(addDsrDetails);
              this._dialogRef.close(true);
            },
            error: (err) => {
              console.log(err);
            },
          });
      }else{
        this.addDsrDetails();
      }

      // this.table.dsrtable.push(addDsrDetails);

     
    }
    // this.onReset();
  }

  addDsrDetails() {
    const addDsrDetails: DsrDetails = {
      id : 0,
      userId: this.userService.getUserIdfromLocal(),
      date: this.addDsrForm.value.dsrDate,
      timespent: this.hourSpent,
      minute: this.minuteSpent,
      pendingHour: this.pendingHourTime,
      status: this.checked,
    };
    this.dashboardService.addDsrDetails(addDsrDetails).subscribe({
      next: (data) => {
        console.log(data);
        this.pendingHourTime = 0;
        console.log(addDsrDetails);
        this._dialogRef.close(true);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onReset() {
    this.addDsrForm.reset({
      newDsr: [
        {
          department: 'development',
          client: '',
          project: '',
          taskType: '',
          hour: 0,
          minute: 0,
          taskKey: null,
          dueDate: null,
          dsrDetails: null,
        },
      ],
    });
  }

  private updateSpentTime() {
    const firstFormGroup = (this.addDsrForm.get('newDsr') as FormArray).at(
      0
    ) as FormGroup;
    this.hourSpent = firstFormGroup.get('hour')?.value;
    this.minuteSpent = firstFormGroup.get('minute')?.value;
  }
}
