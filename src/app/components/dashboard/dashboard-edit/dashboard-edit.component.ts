import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserDetails } from '../../../shared/registerUser/registerUserDetails.modal';
import { RegisterUserService } from '../../../shared/registerUser/registerUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../login/user.service';
import { LocalService } from '../../localService';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css'],
})
export class DashboardEditComponent implements OnInit {

  constructor(private registerUser: RegisterUserService, private router: Router, private route: ActivatedRoute, private userService: UserService, private localService: LocalService){}

  messageShow: boolean = false;
  showButton: boolean = true;

  disabled: boolean = false;

  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
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
        mobile: new FormControl(null, [Validators.minLength(10), Validators.maxLength(10)])
      }),
    });
    this.loginForm.disable();
    
    
    this.loginForm.patchValue(this.registerUser.registerUserDetails[this.registerUser.registerUserDetails.length-1]);
    
    
  }
  

  onEdit(){
    this.disabled = true;
    this.loginForm.enable();
  }

  onReset(){
    this.disabled=false;
    this.loginForm.reset();
  }

  onSubmit() {
   
    const registerUserDetails = this.loginForm.value as RegisterUserDetails;
    console.log(registerUserDetails);
    this.registerUser.registerUserDetails.push(registerUserDetails);
    this.loginForm.patchValue(registerUserDetails);

    this.localService.saveData(registerUserDetails);

    this.loginForm.disable();
    this.disabled=false;
    setTimeout(()=>{
      this.messageShow=true;
    }, 500);
    setTimeout(()=>{
      this.messageShow=false;
    }, 3000);
    
    
  }

  // AddSkills() {
  //   (<FormArray>this.loginForm.get('skills')).push(
  //     new FormControl(null, Validators.required)
  //   );
  // }

  // DeleteSkills(index: number) {
  //   (<FormArray>this.loginForm.get('skills')).removeAt(index);
  // }
}

// if(this.addDsrForm.valid){
//   const addDsrDetails: DsrDetails ={
//       date: this.addDsrForm.value.dsrDate,
//       timespent: this.addDsrForm.value.hour,
//       pendingHour: this.addDsrForm.value.minute,
//       status: this.checked,
//   };
//   this.table.dsrtable.push(addDsrDetails);
//   this.router.navigate(['/home'])
//   console.log(addDsrDetails.date, addDsrDetails.timespent, addDsrDetails.pendingHour, addDsrDetails.status);
// }