import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-helpDesk",
    templateUrl: "./helpDesk.component.html",
    styleUrls: ["./helpDesk.component.css"],

})
export class HelpDeskComponent{
  pageSize: number=10;
    currentPage: number = 0;
    lowValue: number = 0;
    highValue: number = 20;

    helpdeskDetails = [
      {
        ticketId: 1,
        subject: "Keyboard not working",
        description: "When I press the key 'A' it does not work. Please help me with this issue.",
        status: "Open",
      },
      {
        ticketId: 2,
        subject: "Mouse not working",
        description: "When I move the mouse, the cursor does not move. Please help me with this issue.",
        status: "Open",
      }
    ];
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  
    onView(helpDesk: any) {
      console.log("View");
    }
    onEdit(helpDesk: any) {
      console.log("Edit");
    }
    onDelete(helpDesk: any) {
      console.log("Delete");
    }

    constructor(private _formBuilder: FormBuilder) {}
  }
