import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { SortingPipe } from './custom-pipe/sorting.pipe';
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
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchComponent } from './search/search.component';
import { FilterSearchPipe } from './custom-pipe/filter-search.pipe';
import { TitleCasePipe } from './custom-pipe/title-case.pipe';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  declarations: [
    AlertComponent,
    SpinnerComponent,
    HeaderComponent,
    SortingPipe,
    FooterComponent,
    MenuBarComponent,
    DarkModeToggleComponent,
    AnnouncementComponent,
    EmpAddEditComponent,
    SearchComponent,
    FilterSearchPipe,
    TitleCasePipe
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
    AnnouncementComponent,
    SearchComponent,
    FilterSearchPipe,
    TitleCasePipe
  ],
  
})
export class SharedModule {}
