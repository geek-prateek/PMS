import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { DarkModeService } from "angular-dark-mode";
import { Observable } from "rxjs";
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";

@Component({
    selector: 'app-dark-mode-toggle',
    templateUrl: './dark-mode-toggle.component.html'

})
export class DarkModeToggleComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  
  constructor(private darkModeService: DarkModeService) {}

  onToggle() {
    this.darkModeService.toggle();
    
  }

  
}