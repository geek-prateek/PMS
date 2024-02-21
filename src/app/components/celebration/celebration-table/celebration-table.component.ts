import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../../services/registerUser.service';
import { CelebrationDetails } from '../../../Model/CelebrationDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../../../services/localService';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-celebration-table',
  templateUrl: './celebration-table.component.html',
  styleUrls: ['./celebration-table.component.css'],
})
export class CelebrationTableComponent implements OnInit {
  constructor(
    private registerUser: RegisterUserService,
    private router: Router,
    private route: ActivatedRoute,
    private localService: LocalService,
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

  onDashboard() {
    this.router.navigate(['../dashboard'], { relativeTo: this.route });
  }
}
