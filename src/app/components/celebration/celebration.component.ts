import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelebrationDetails } from 'src/app/Model/CelebrationDetails';
import { RegisterUserService } from 'src/app/services/registerUser.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrls: ['../celebration/celebration-table/celebration-table.component.css'],
})
export class CelebrationComponent {
  on: boolean = false;
    search: string = "";

    onSearch() {
        this.on = !this.on;
    }
    Out() {
        this.on = false;
        this.search = "";
    }
  month: string = 'January'; 
  constructor(
    private registerUser: RegisterUserService,
    private userService: UserService
  ) {}

  celebrationDetails: CelebrationDetails[] = [];
  todayDate: string = new Date().toLocaleDateString();

  ngOnInit(): void {
    // if(this.localService.getWorkData() === null){
    //   this.localService.saveWorkData(this.celebrationDetails);
    
    // }else{
    //   this.celebrationDetails = this.localService.getWorkData();
    
    // }
    this.registerUser.getWorkAnniversaryDetails().subscribe({
      next: (data) => {
        this.celebrationDetails = data;
      },
      error: (err) => {
        console.log(err);
      },
    })

    
  }
}
