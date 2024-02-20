import { Component, Input } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { LocalService } from 'src/app/services/localService';
import { RegisterUserService } from 'src/app/services/registerUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private localService: LocalService
  ) {}
  title: string = 'PMS';
  username: string = '';
  jobTitle: string = '';
  id: number = 0;
  showButton: boolean = false;
  showLoader: boolean = false;
  showProgress: boolean = true;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      
    });
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.showLoader = false;
      }
    });
    const userIdfromLocal = this.userService.getUserIdfromLocal();
    this.userService.getProfileDetailsById(userIdfromLocal).subscribe({
      next: (data) => {
        this.username = data.username;
        this.jobTitle = data.userRole;
      },
      error: (err) => {
        console.log(err);
      },
    
    });
    console.log(this.username);
    console.log(this.id);
    
    setTimeout(() => {
      this.showProgress = false;
    }, 2000);

    this.localService.title = this.title;
  }

  onAbout() {}

  onDashboard() {
    this.authService.onDashboard();
    this.showButton = true;
  }

  onHome() {
    this.router.navigate(['/head/home']);
    this.showButton = false;
  }

  onLogout() {
    this.userService.logout();
  }
}
