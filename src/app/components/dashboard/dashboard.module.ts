import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardEditComponent } from "./dashboard-edit/dashboard-edit.component";
import { DashboardQualificationComponent } from "./dashboard-qualification/dashboard-qualification.component";
import { DashboardTeamComponent } from "./dashboard-team/dashboard-team.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [ReactiveFormsModule, RouterModule, SharedModule, CommonModule],
    declarations: [DashboardComponent, DashboardEditComponent, DashboardQualificationComponent, DashboardTeamComponent],
    exports: [DashboardComponent, DashboardEditComponent, DashboardQualificationComponent, DashboardTeamComponent, ReactiveFormsModule, RouterModule, SharedModule,CommonModule]
})
export class DashboardModule{

}