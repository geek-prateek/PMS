import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardQualificationComponent } from './components/dashboard/dashboard-qualification/dashboard-qualification.component';
import { DashboardTeamComponent } from './components/dashboard/dashboard-team/dashboard-team.component';
import { AddDsrComponent } from './components/dsr/addDsr/addDsr.component';
import { HeaderComponent } from './shared/header/header.component';
import { LeaveComponent } from './components/leave/leave.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { PolicyComponent } from './components/policy/policy.component';
import { DsrComponent } from './components/dsr/dsr.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'head',
    component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dailystatusreportList', component: DsrComponent },
      {path: 'leave', component: LeaveComponent},
      {path: 'holiday', component: HolidayComponent},
      {path: 'inbox', component: InboxComponent},
      {path: 'policy', component: PolicyComponent},
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'edit', component: DashboardEditComponent },
          { path: 'qualification', component: DashboardQualificationComponent },
          { path: 'team', component: DashboardTeamComponent },
        ],
      },
    ],
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
