import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './customValidators/customValidators.validators';
import { AuthService } from './auth.service';

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
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
      }
    });
  }

  onLogin(){
    const username = this.loginForm.value.username ?? '';
    const password = this.loginForm.value.password ?? '';

    const user = this.authService.login(username, password);

    if(user === undefined){
      this.alert = "Username & Password are incorrect";
    }
    else{
      this.isLoaded = true;
      console.log('Succesfully logged IN');
      this.userService.username = this.loginForm.value.username || '';
      setTimeout(()=>{
        this.router.navigate(['/head/home'], {queryParams: {id: this.userService.getUserID()}});
      },1000)
    }
    
  }

  onRegister() {
    // this.showSignup.emit(true);
    this.router.navigate(['/register']);
  }

  onHandleClose(){
    this.alert = null;
  }

  
}
