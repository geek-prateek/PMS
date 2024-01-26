import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { HeaderComponent } from "./header/header.component";
import { SortingPipe } from "./sorting.pipe";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { MenuBarComponent } from "./menubar/menubar.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [RouterModule, CommonModule, MatProgressSpinnerModule],
    declarations: [AlertComponent, SpinnerComponent, HeaderComponent, SortingPipe, FooterComponent, MenuBarComponent],
    exports: [AlertComponent, SpinnerComponent, HeaderComponent, SortingPipe, RouterModule, FooterComponent, MenuBarComponent]
})
export class SharedModule {
}