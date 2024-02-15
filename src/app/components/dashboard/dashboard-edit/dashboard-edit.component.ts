import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserDetails } from '../../../shared/registerUser/registerUserDetails.modal';
import { RegisterUserService } from '../../../services/registerUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LocalService } from '../../../services/localService';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css'],
})
export class DashboardEditComponent implements OnInit {
  constructor(
    private registerUser: RegisterUserService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private localService: LocalService
  ) {}

  messageShow: boolean = false;
  showButton: boolean = true;
  userDetails: RegisterUserDetails[] = [];
  disabled: boolean = false;

  loginForm: FormGroup = new FormGroup({});

  country: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia'];
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      dob: new FormControl(null, Validators.required),
      gender: new FormControl('male'),
      department: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
      doj: new FormControl(null, Validators.required),
      address: new FormGroup({
        street: new FormControl(null),
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        mobile: new FormControl(null, [
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      }),
    });

    this.userDetails = this.localService.getData(this.userService.username);
    console.log(this.localService.getData(this.userService.username));
    this.loginForm.patchValue(this.userDetails);

    this.loginForm.disable();

    // this.registerUser.registerUserDetails[this.registerUser.registerUserDetails.length-1]
  }

  canExit() {
    if (this.loginForm.dirty && !this.loginForm.disabled) {
      return confirm('Are you sure you want to leave this page?');
    } else {
      return true;
    }
  }

  onEdit() {
    this.disabled = true;
    this.loginForm.enable();
  }

  onReset() {
    this.disabled = false;
    this.loginForm.reset({
      name: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      department: null,
      userRole: null,
      doj: null,
      address: {
        street: null,
        city: null,
        state: null,
        country: 'india',
        mobile: null,
      },
    });
  }

  onSubmit() {
    if(this.loginForm.valid){
      const registerUserDetails = this.loginForm.value as RegisterUserDetails;
      console.log(registerUserDetails);

      this.registerUser.registerUserDetails.push(registerUserDetails);
      this.loginForm.patchValue(registerUserDetails);

      this.localService.saveData(this.userService.username, registerUserDetails);

      
      this.localService.saveBirthdayData(this.registerUser.registerUserDetails);
      

      this.localService.saveWorkData(this.registerUser.registerUserDetails);

      this.loginForm.disable();
      this.disabled = false;
      setTimeout(() => {
        this.messageShow = true;
      }, 500);
      setTimeout(() => {
        this.messageShow = false;
      }, 3000);
    }
  }
}
