// import { Component, DoCheck, OnInit } from '@angular/core';
// import {
//   FormArray,
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { DsrDetails } from '../tableDetails';
// import { DashboardService } from '../../dashboard/dashboard.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-add-dsr',
//   templateUrl: './addDsr.component.html',
//   styleUrls: ['./addDsr.component.css'],
// })
// export class AddDsrComponent implements OnInit, DoCheck {
//   hourSpent: number = 0;
//   minuteSpent: number = 0;
//   todayDate: string = '';
//   pendingHourTime: number = 0;
//   checked: string = 'Pending';

//   constructor(
//     private table: DashboardService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   addDsrForm: FormGroup = new FormGroup({});

//   ngOnInit() {
//     const date = new Date();
//     this.todayDate = date.toLocaleDateString();

//     this.addDsrForm = new FormGroup({
//       dsrDate: new FormControl(null, Validators.required),
//       newDsr: new FormArray([
//         new FormGroup({
//           department: new FormControl('development', Validators.required),
//           client: new FormControl('client', Validators.required),
//           project: new FormControl('project', Validators.required),
//           taskType: new FormControl('taskType', Validators.required),
//           hour: new FormControl(0, [
//             Validators.required,
//             Validators.min(8),
//             Validators.max(23),
//           ]),
//           minute: new FormControl(0, [Validators.min(0), Validators.max(59)]),
//           taskKey: new FormControl(null),
//           dueDate: new FormControl(null),
//           dsrDetails: new FormControl(null, Validators.required),
//         }),
//       ]),
//     });
//   }

//   get newDsrControls() {
//     console.log((<FormArray>this.addDsrForm.get('newDsr')).controls);

//     return (<FormArray>this.addDsrForm.get('newDsr')).controls;
//   }

//   ngDoCheck() {
//     const firstFormGroup = (this.addDsrForm.get('newDsr') as FormArray).at(0) as FormGroup; 
//     console.log(firstFormGroup);
        
//     this.hourSpent = firstFormGroup.get('hour')!.value;     
//     this.minuteSpent = firstFormGroup.get('minute')!.value;

//     console.log(this.hourSpent, this.minuteSpent);
    

//     // this.hourSpent = (<FormGroup>(
//     //   (<FormArray>this.addDsrForm.get('newDsr'))?.controls[0]
//     // ))?.value.hour;
//     // this.minuteSpent = (<FormGroup>(
//     //   (<FormArray>this.addDsrForm.get('newDsr'))?.controls[0]
//     // ))?.value.minute;
//   }

//   onAddTask() {
//     (<FormArray>this.addDsrForm.get('newDsr')).push(new FormGroup({}));
//   }

//   onDelete(item: number) {
//     (<FormArray>this.addDsrForm.get('newDsr')).removeAt(item);
//   }

//   onPublish() {
//     if (this.addDsrForm.valid) {
//       this.pendingHourTime = 8 - this.hourSpent > 0 ? 8 - this.hourSpent : 0;
//       const addDsrDetails: DsrDetails = {
//         date: this.addDsrForm.value.dsrDate,
//         timespent: this.hourSpent,
//         minute: this.minuteSpent,
//         pendingHour: this.pendingHourTime,
//         status: this.checked,
//       };
//       this.table.dsrtable.push(addDsrDetails);
//       this.pendingHourTime = 0;
//       console.log(
//         addDsrDetails.date,
//         addDsrDetails.timespent,
//         addDsrDetails.minute,
//         addDsrDetails.pendingHour,
//         addDsrDetails.status
//       );
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DsrDetails } from '../tableDetails';
import { DashboardService } from '../../../services/dashboard.service';
 
@Component({
  selector: 'app-add-dsr',
  templateUrl: './addDsr.component.html',
  styleUrls: ['./addDsr.component.css'],
})
export class AddDsrComponent implements OnInit {
  hourSpent: number = 0;
  minuteSpent: number = 0;
  todayDate: string = '';
  pendingHourTime: number = 0;
  checked: string = 'Pending';
  constructor(
    private table: DashboardService,
    private fb: FormBuilder
  ) {}
 
  addDsrForm: FormGroup = this.fb.group({
    dsrDate: [null, Validators.required],
    newDsr: this.fb.array([
      this.addDsrFormGroup()
    ]),
  });
 
  ngOnInit() {
    const date = new Date();
    this.todayDate = date.toLocaleDateString();

    this.addDsrForm.get('newDsr')?.valueChanges.subscribe(() => {
      this.updateSpentTime();
    });
  }
 
  get newDsrControls() {
    return (this.addDsrForm.get('newDsr') as FormArray).controls;
  }

  addDsrFormGroup(){
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
      })
  }

 
  onAddTask() {
    (this.addDsrForm.get('newDsr') as FormArray).push(this.addDsrFormGroup());
  }
 
  onDelete(item: number) {
    (this.addDsrForm.get('newDsr') as FormArray).removeAt(item);
  }
 
  onPublish() {
    if (this.addDsrForm.valid) {
      this.pendingHourTime = Math.max(8 - this.hourSpent, 0);
      const addDsrDetails: DsrDetails = {
        date: this.addDsrForm.value.dsrDate,
        timespent: this.hourSpent,
        minute: this.minuteSpent,
        pendingHour: this.pendingHourTime,
        status: this.checked,
      };
      this.table.dsrtable.push(addDsrDetails);
      this.pendingHourTime = 0;
      console.log(addDsrDetails);

      this.onReset();
    }
  }

  // addDsrDetails(){
  //   this.table.addDsrDetails(this.addDsrForm.value).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
    
  //   })
  // }

  
  

  onReset(){
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
        }
      ]
    })
  }
 
  private updateSpentTime() {
    const firstFormGroup = (this.addDsrForm.get('newDsr') as FormArray).at(0) as FormGroup;
    this.hourSpent = firstFormGroup.get('hour')?.value;
    this.minuteSpent = firstFormGroup.get('minute')?.value;
  }
}
