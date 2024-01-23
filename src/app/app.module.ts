import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { UserService } from './components/login/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardQualificationComponent } from './components/dashboard/dashboard-qualification/dashboard-qualification.component';
import { DashboardTeamComponent } from './components/dashboard/dashboard-team/dashboard-team.component';
import { DsrComponent } from './components/dsr/dsr.component';
import { AddDsrComponent } from './components/dsr/addDsr/addDsr.component';
import { LeaveComponent } from './components/leave/leave.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { LeaveTableComponent } from './components/leave/leave-table/leave-table.component';
import { LeaveOrderComponent } from './components/leave/leave-order/leave-order.component';
import { ContactComponent } from './components/contact/contact.component';
import { BirthdayTableComponent } from './components/birthday/birthday-table/birthday-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DsrTableComponent } from './components/dsr/dsr-table/dsr-table.component';
import { LeaveModule } from './components/leave/leave.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { HolidayComponent } from './components/holiday/holiday.component';
import { HolidayOrderComponent } from './components/holiday/holiday-order/holiday-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    DsrTableComponent,
    DsrComponent,
    AddDsrComponent,
    BirthdayComponent,
    ContactComponent,
    BirthdayTableComponent,
    HolidayComponent,
    HolidayOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LeaveModule,
    DashboardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
