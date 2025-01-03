import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardQualificationComponent } from './components/dashboard/dashboard-qualification/dashboard-qualification.component';
import { DashboardTeamComponent } from './components/dashboard/dashboard-team/dashboard-team.component';

import { HeaderComponent } from './shared/header/header.component';
import { LeaveComponent } from './components/leave/leave.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { PolicyComponent } from './components/policy/policy.component';
import { DsrComponent } from './components/dsr/dsr.component';
import { AuthService } from './services/auth.service';
import { CanActivate, CanActivateChild, resolve } from './shared/auth.guard';
import { UserService } from './services/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CelebrationComponent } from './components/celebration/celebration.component';
import { CardStatsComponent } from './components/card-stats/card-stats.component';
import { HelpDeskComponent } from './components/helpDesk/helpDesk.component';
import { ViewDsrComponent } from './components/viewDsr/viewDsr.component';
import { ViewLeaveComponent } from './components/viewLeave/viewLeave.component';
import { AddDsrListComponent } from './components/dsr/addDsrList/addDsrList.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {
    path: 'head',
    component: HeaderComponent,
    // canActivate: [CanActivate],
    // canActivateChild: [CanActivateChild],
    children: [
      { path: 'home', component: HomeComponent },
      {path: 'card-stats', component: CardStatsComponent},
      { path: 'celebration', component: CelebrationComponent},
      { path: 'dailystatusreport', component: ViewDsrComponent},
      { path: 'dailystatusreportList', component: DsrComponent , children: [
        { path: 'addDsr', component: AddDsrListComponent }
      ]},
      {path: 'leave', component: ViewLeaveComponent},
      {path: 'holiday', component: HolidayComponent, resolve:{holidayData: resolve}},
      {path: 'inbox', component: InboxComponent},
      {path: 'policy', component: PolicyComponent},
      {path: 'profile', component: ProfileComponent},
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'edit', component: DashboardEditComponent , canDeactivate: [(comp: DashboardEditComponent)=>{return comp.canExit();}]},
          { path: 'qualification', component: DashboardQualificationComponent },
          { path: 'team', component: DashboardTeamComponent },
        ],
      },
      {path: 'helpDesk', component: HelpDeskComponent},
    ],
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
