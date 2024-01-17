import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-leave-order",
    templateUrl: "./leave-order.component.html"
})
export class LeaveOrderComponent{

    selectOrder = new FormControl('select')
}