import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html"
})
export class ContactComponent{

    msgSent: boolean = false;

    contactForm = new FormGroup({
        query : new FormControl('query', Validators.required),
        desc: new FormControl('', Validators.required)
    })

    onSend(){
        setTimeout(()=>{
            this.msgSent = true;     
        },500);
        setTimeout(()=>{
            this.msgSent = false;
        }, 3000);
        this.contactForm.reset();
        
    }

    onReset(){
        this.contactForm.reset();
    }
}