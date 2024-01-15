import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent{

    homeForm = new FormGroup({
        lastdays: new FormControl(null, Validators.required),
        lastmonths: new FormControl(null, Validators.required),
    })
}