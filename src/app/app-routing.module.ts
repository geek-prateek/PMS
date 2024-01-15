import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardQualificationComponent } from './components/dashboard/dashboard-qualification/dashboard-qualification.component';
import { DashboardTeamComponent } from './components/dashboard/dashboard-team/dashboard-team.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "register", component: SignupComponent},
  {path: "dashboard", component: DashboardComponent, children: [
    {path: "edit", component: DashboardEditComponent},
    {path: "qualification", component: DashboardQualificationComponent},
    {path: "team", component: DashboardTeamComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
