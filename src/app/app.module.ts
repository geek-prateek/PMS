import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { UserService } from './components/login/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardQualificationComponent } from './components/dashboard/dashboard-qualification/dashboard-qualification.component';
import { DashboardTeamComponent } from './components/dashboard/dashboard-team/dashboard-team.component';
import { DashboardTableComponent } from './components/dashboard/dashboard-table/dashboard-table.component';
import { SortingPipe } from './components/dashboard/sorting.pipe';
import { DsrComponent } from './components/dsr/dsr.component';
import { AddDsrComponent } from './components/dsr/addDsr/addDsr.component';
import { LeaveComponent } from './components/leave/leave.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { LeaveTableComponent } from './components/leave/leave-table/leave-table.component';
import { LeaveOrderComponent } from './components/leave/leave-order/leave-order.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    AlertComponent,
    SpinnerComponent,
    DashboardComponent,
    DashboardEditComponent,
    DashboardQualificationComponent,
    DashboardTeamComponent,
    DashboardTableComponent,
    SortingPipe,
    DsrComponent,
    AddDsrComponent,
    LeaveComponent,
    BirthdayComponent,
    LeaveTableComponent,
    LeaveOrderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
