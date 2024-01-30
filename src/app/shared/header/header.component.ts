import { Component, Input } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { UserService } from '../../components/login/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  title: string = 'Angular';
  username: string = '';
  showButton: boolean = false;
  showLoader: boolean = false;

  ngOnInit() {
    this.username = this.userService.username;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationCancel) {
        this.showLoader = false;
      }
    });
  }

  onAbout() {}

  onDashboard() {
    this.router.navigate(['/head/dashboard/edit']);
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
