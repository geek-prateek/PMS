import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveDetails } from "../leaveDetails";
import { UserService } from "../../../services/user.service";
import { LeaveService } from "../../../services/leave.service";
import { RegisterUserService } from "src/app/services/registerUser.service";
import { LocalService } from "../../../services/localService";

@Component({
    selector: 'app-leave-apply',
    templateUrl: './leave-apply.component.html',
    styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent{

    constructor(private userService: UserService, private leaveService: LeaveService, private registerUser: RegisterUserService, private localService: LocalService){}
    
    leaveBalance: number = 0;
    
    leaveApplyForm= new FormGroup({
        taxYear: new FormControl('2023-2024'),
        leaveType: new FormControl('', Validators.required),
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
            this.onReset();
        }
        
    }

    onReset(){
        this.leaveApplyForm.reset({
            taxYear: '2023-2024',
            leaveType: '',
            leaveFrom: null,
            leaveTo: null,
            reason: '',
        });
    
    }

}

// this.registerUser.registerUserDetails[this.registerUser.registerUserDetails.length-1].name;