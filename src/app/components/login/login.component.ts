import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './customValidators/customValidators.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  // username: string = '';
  // password: string = '';
  alert: string | null = null;
  isLoaded: boolean = false;
  regex =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), CustomValidators.noSpaceAllowed]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.regex), CustomValidators.noSpaceAllowed]),
  });

  // @Output() loggedIn = new EventEmitter<boolean>();
  // @Output() showSignup = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    
  }

  onLogin() {
    if (
      this.userService.addedUser.find(
        (user) =>
          user.username === this.loginForm.value.username && user.password === this.loginForm.value.password
      )
    ) {
      this.isLoaded = true;
      console.log('Succesfully logged IN');
      this.userService.username = this.loginForm.value.username || '';

      // this.loggedIn.emit(true);
      this.router.navigate(['/head/home']);
    } else {
      this.alert = "Username & Password are incorrect";
      // alert('Username & Password are incorrect!');
    }
    // this.username = '';
    // this.password = '';
  }
  onRegister() {
    // this.showSignup.emit(true);
    this.router.navigate(['/register']);
  }

  onHandleClose(){
    this.alert = null;
  }
}
