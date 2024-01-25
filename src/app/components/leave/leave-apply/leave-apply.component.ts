import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveDetails } from "../leaveDetails";
import { UserService } from "../../login/user.service";
import { LeaveService } from "../leave.service";
import { RegisterUserService } from "src/app/shared/registerUser/registerUser.service";

@Component({
    selector: 'app-leave-apply',
    templateUrl: './leave-apply.component.html',
    styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent{

    constructor(private userService: UserService, private leaveService: LeaveService, private registerUser: RegisterUserService){}

    leaveBalance: number = 0;
    
    leaveApplyForm= new FormGroup({
        taxYear: new FormControl('2023-2024'),
        leaveType: new FormControl('leaveType', Validators.required),
        leaveFrom: new FormControl(null, Validators.required),
        leaveTo: new FormControl(null, Validators.required),
        reason: new FormControl(''),
    });

    onApply(){
        if(this.leaveApplyForm.valid){
            const leaveApplyDetails : LeaveDetails = {
                employeeName: this.userService.username,
                startDate: this.leaveApplyForm.value.leaveFrom,
                endDate: this.leaveApplyForm.value.leaveTo,
                leaveCount: this.leaveBalance,
            };
            this.leaveService.leaveDetails.push(leaveApplyDetails);
            console.log(leaveApplyDetails);
        }
    }

}

// this.registerUser.registerUserDetails[this.registerUser.registerUserDetails.length-1].name;