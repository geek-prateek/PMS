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
    private authService: AuthService
  ) {}
  title: string = 'Angular';
  username: string = '';
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
    this.username = this.userService.username;

    setTimeout(() => {
      this.showProgress = false;
    }, 2000);
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
    this.router.navigate(['/login'], { queryParams: { logout: true } });
  }
}
