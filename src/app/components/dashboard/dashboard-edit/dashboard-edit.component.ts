import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserDetails } from '../../../Model/registerUserDetails';
import { RegisterUserService } from '../../../services/registerUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LocalService } from '../../../services/localService';
import { UserDetails } from 'src/app/Model/userDetails';
import { DashboardComponent } from '../dashboard.component';
import { BirthDetails } from 'src/app/Model/birthDetails';
import { CelebrationDetails } from 'src/app/Model/CelebrationDetails';
import { TitleCasePipe } from 'src/app/shared/custom-pipe/title-case.pipe';
import { formatDate } from '@angular/common';

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
    private localService: LocalService,
  )
  {}

  
  messageShow: boolean = false;
  showButton: boolean = true;
  userDetails: RegisterUserDetails[] = [];
  disabled: boolean = false;

  loginForm: FormGroup = new FormGroup({});
  username: string = this.userService.username;
  userId: number = this.userService.getUserIdfromLocal();
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
    
    this.getProfileDetails();
    
    // this.userDetails = this.localService.getData(this.userService.username);
    // console.log(this.localService.getData(this.userService.username));
    

    this.loginForm.disable();

    // this.registerUser.registerUserDetails[this.registerUser.registerUserDetails.length-1]
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
 maxDate = formatDate(new Date(), '2005-12-31','en');
 minDate = formatDate(new Date(), '1950-01-01','en');

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
    if (this.loginForm.valid) {
      let addLoginDetails: RegisterUserDetails = {
        id: this.userService.getUserIdfromLocal(),
        name: this.loginForm.value.name,
        email: this.loginForm.value.email,
        username: this.loginForm.value.username,
        dob: this.loginForm.value.dob,
        gender: this.loginForm.value.gender,
        department: this.loginForm.value.department,
        userRole: this.loginForm.value.userRole,
        doj: this.loginForm.value.doj,
        address: {
          street: this.loginForm.value.address.street,
          city: this.loginForm.value.address.city,
          state: this.loginForm.value.address.state,
          country: this.loginForm.value.address.country,
          mobile: this.loginForm.value.address.mobile,
        },
      };
      const id = addLoginDetails.id;
        this.userService
          .updateProfileDetails(id, addLoginDetails)
          .subscribe({
            next: (data) => {
              console.log(data);
              this.loginForm.patchValue(addLoginDetails);
             
              this.loginForm.disable();
              this.disabled = false;
              setTimeout(() => {
                this.messageShow = true;
              }, 500);
              setTimeout(() => {
                this.messageShow = false;
              }, 3000);
            },
            error: (err) => {
              console.log(err);
            },
          });

          let birthdayDetails: BirthDetails = {
            name: this.loginForm.value.name,
            dob: this.loginForm.value.dob,
          }
          this.updateBirthdayDetails(id, birthdayDetails);

          let workAnniversaryDetails: CelebrationDetails = {
            name: this.loginForm.value.name,
            doj: this.loginForm.value.doj,
          }
          this.updateWorkAnniversaryDetails(id, workAnniversaryDetails);
    }

  }

  updateBirthdayDetails(id: number, birthdayDetails: BirthDetails) {
    this.registerUser.updateBirthdayDetails(id, birthdayDetails).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateWorkAnniversaryDetails(id: number, workAnniversaryDetails: CelebrationDetails) {
    this.registerUser.updateWorkAnniversaryDetails(id, workAnniversaryDetails).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProfileDetails() {
    this.userService.getProfileDetails().subscribe({
      next: (data) => {
        const filteredData = data.filter(
          (element: any) => element.id === this.userId
        );
        this.userDetails = filteredData;
        this.loginForm.patchValue(this.userDetails[0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // onSubmit() {
  //   if(this.loginForm.valid){
  //     const registerUserDetails = this.loginForm.value as RegisterUserDetails;
  //     console.log(registerUserDetails);

  //     this.registerUser.registerUserDetails.push(registerUserDetails);
  //     this.loginForm.patchValue(registerUserDetails);

  //     this.localService.saveData(this.userService.username, registerUserDetails);

  //     this.localService.saveBirthdayData(this.registerUser.registerUserDetails);

  //     this.localService.saveWorkData(this.registerUser.registerUserDetails);

  //     this.loginForm.disable();
  //     this.disabled = false;
  //     setTimeout(() => {
  //       this.messageShow = true;
  //     }, 500);
  //     setTimeout(() => {
  //       this.messageShow = false;
  //     }, 3000);
  //   }
  // }
}
