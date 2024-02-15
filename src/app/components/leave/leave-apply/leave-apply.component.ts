import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveDetails } from "../leaveDetails";
import { UserService } from "../../../services/user.service";
import { LeaveService } from "../../../services/leave.service";
import { RegisterUserService } from "src/app/services/registerUser.service";
import { LocalService } from "../../../services/localService";
import { HolidayService } from "src/app/services/holiday.service";

@Component({
    selector: 'app-leave-apply',
    templateUrl: './leave-apply.component.html',
    styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent {

    constructor(private userService: UserService, private leaveService: LeaveService, private registerUser: RegisterUserService, private localService: LocalService, private holidayService: HolidayService){}
    leaveCount: number = 0;
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
            const startDate: Date = new Date(this.leaveApplyForm.value.leaveFrom || '');
            const endDate: Date = new Date(this.leaveApplyForm.value.leaveTo || '');

            this.leaveCount = this.holidayService.calculateBusinessDays(startDate, endDate);
            console.log(startDate, endDate, this.holidayService.calculateBusinessDays(startDate, endDate));

            const registerUser = this.localService.getData(this.userService.username);
            let name = registerUser.name;

            const leaveApplyDetails : LeaveDetails = {
                employeeName: name,
                startDate: this.leaveApplyForm.value.leaveFrom!,
                endDate: this.leaveApplyForm.value.leaveTo!,
                leaveCount: this.leaveCount,
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