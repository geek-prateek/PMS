import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { SortingPipe } from './sorting.pipe';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menubar/menubar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AnnouncementComponent } from './announcement/announcement.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations: [
    AlertComponent,
    SpinnerComponent,
    HeaderComponent,
    SortingPipe,
    FooterComponent,
    MenuBarComponent,
    DarkModeToggleComponent,
    AnnouncementComponent
  ],
  exports: [
    AlertComponent,
    SpinnerComponent,
    HeaderComponent,
    SortingPipe,
    RouterModule,
    FooterComponent,
    MenuBarComponent,
    DarkModeToggleComponent,
    MatSlideToggleModule,
    AnnouncementComponent
  ],
})
export class SharedModule {}
