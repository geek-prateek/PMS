import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LeaveDetails } from "../../../Model/leaveDetails";
import { UserService } from "../../../services/user.service";
import { LeaveService } from "../../../services/leave.service";
import { RegisterUserService } from "src/app/services/registerUser.service";
import { HolidayService } from "src/app/services/holiday.service";
import { CardStatsComponent } from "../../card-stats/card-stats.component";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
    selector: 'app-leave-apply',
    templateUrl: './leave-apply.component.html',
    styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent implements OnInit{

    constructor(private userService: UserService, private leaveService: LeaveService, private registerUser: RegisterUserService, private holidayService: HolidayService, private router: Router, private route: ActivatedRoute){}
    leaveCount: number = 0;
    leaveBalance: number = 0;
    leaveApplyForm= new FormGroup({
        taxYear: new FormControl('2023-2024'),
        leaveType: new FormControl('', Validators.required),
        leaveFrom: new FormControl(null, Validators.required),
        leaveTo: new FormControl(null, Validators.required),
        reason: new FormControl(''),
    });

    @ViewChild(CardStatsComponent) cardStatsComponent!: CardStatsComponent;
    name: string = "";

    ngOnInit(): void {
        const userIdfromLocal = this.userService.getUserIdfromLocal();
        this.userService.getProfileDetailsById(userIdfromLocal).subscribe({
            next: (data) => {
                this.name = data.name;
                
            },
            error: (err) => {
                console.log(err);
            },
        
        });
    }

   
    onApply(){
        if(this.leaveApplyForm.valid){
            const startDate: Date = new Date(this.leaveApplyForm.value.leaveFrom || '');
            const endDate: Date = new Date(this.leaveApplyForm.value.leaveTo || '');

            this.leaveCount = this.holidayService.calculateBusinessDays(startDate, endDate);
            console.log(startDate, endDate, this.holidayService.calculateBusinessDays(startDate, endDate));

            const leaveApplyDetails : LeaveDetails = {
                employeeName: this.name,
                startDate: this.leaveApplyForm.value.leaveFrom!,
                endDate: this.leaveApplyForm.value.leaveTo!,
                leaveCount: this.leaveCount,
            }

            this.leaveService.addLeaveDetails(leaveApplyDetails).subscribe({
                next: (data) => {
                  console.log(data);
                  this.getLeaveData();
                  this.leaveService.leaveDetails.push(leaveApplyDetails);  
                  
                    console.log(leaveApplyDetails);
                },
                error: (err) => {
                  console.log(err);
                },
            });
            
            
            
        }
        
    }

    getToday(): string {
        return new Date().toISOString().split('T')[0]
    }
    getLeaveData(){
        this.leaveService.getLeaveDetails().subscribe({
            next: (data) => {
                this.leaveService.leaveDetails = data;
            },
            error: (err) => {
                console.log(err);
            },
        });
        
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