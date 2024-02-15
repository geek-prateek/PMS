import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardQualificationComponent } from './dashboard-qualification/dashboard-qualification.component';
import { DashboardTeamComponent } from './dashboard-team/dashboard-team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QualificationDetails } from './dashboard-qualification/qualification-details/qualification-details.component';
import { QualificationModalComponent } from './dashboard-qualification/qualification-details/qualification-modal/qualification-modal.component';
import { ProfileComponent } from '../profile/profile.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    DashboardEditComponent,
    DashboardQualificationComponent,
    DashboardTeamComponent,
    QualificationDetails,
    QualificationModalComponent,
    ProfileComponent,
  ],
  exports: [
    DashboardComponent,
    DashboardEditComponent,
    DashboardQualificationComponent,
    DashboardTeamComponent,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    CommonModule,
    QualificationDetails,
    QualificationModalComponent,
  ],
})
export class DashboardModule {}
