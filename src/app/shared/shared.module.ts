import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { HeaderComponent } from "./header/header.component";
import { SortingPipe } from "./sorting.pipe";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [AlertComponent, SpinnerComponent, HeaderComponent, SortingPipe],
    exports: [AlertComponent, SpinnerComponent, HeaderComponent, SortingPipe, RouterModule]
})
export class SharedModule {
}