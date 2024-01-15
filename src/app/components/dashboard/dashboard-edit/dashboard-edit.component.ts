import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css'],
})
export class DashboardEditComponent {
  loginForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, Validators.required),
    dob: new FormControl(null, Validators.required),
    gender: new FormControl('male'),
    department: new FormControl(null, Validators.required),
    userRole: new FormControl(null, Validators.required),
    doj: new FormControl(null, Validators.required),
    address: new FormGroup({
      street: new FormControl(null),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      country: new FormControl('india', Validators.required),
      mobile: new FormControl(null, Validators.maxLength(10)),
    }),
    skills: new FormArray([new FormControl(null, Validators.required)]),
  });

  onSubmit() {
    console.log(this.loginForm);
    this.loginForm.reset();
  }

  AddSkills() {
    (<FormArray>this.loginForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  DeleteSkills(index: number) {
    (<FormArray>this.loginForm.get('skills')).removeAt(index);
  }
}
