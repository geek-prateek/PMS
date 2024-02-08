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

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    CommonModule,
    MatPaginatorModule,
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
