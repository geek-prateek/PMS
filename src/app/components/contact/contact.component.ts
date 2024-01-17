import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html"
})
export class ContactComponent{
    contactForm = new FormGroup({
        query : new FormControl('query', Validators.required),
        desc: new FormControl('', Validators.required)
    })

    onSend(){

    }

    onReset(){
        
    }
}