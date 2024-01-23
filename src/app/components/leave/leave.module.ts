import { NgModule } from "@angular/core";
import { LeaveApplyComponent } from "./leave-apply/leave-apply.component";
import { LeaveComponent } from "./leave.component";
import { LeaveOrderComponent } from "./leave-order/leave-order.component";
import { LeaveTableComponent } from "./leave-table/leave-table.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [ReactiveFormsModule, CommonModule],
    declarations: [LeaveComponent, LeaveOrderComponent, LeaveTableComponent ,LeaveApplyComponent],
    exports: [LeaveComponent, LeaveOrderComponent, LeaveTableComponent ,LeaveApplyComponent, ReactiveFormsModule, CommonModule]
})
export class LeaveModule{

}