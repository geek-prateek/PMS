import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../../services/registerUser.service';
import { CelebrationDetails } from '../CelebrationDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../../../services/localService';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-celebration-table',
  templateUrl: './celebration-table.component.html',
  styles: [
    `
      

   .grid {
    border: 1px solid #ddd;
    position: relative;
    padding-top: 37px;
    background: #7385df;
    width:100%;
    }
    .grid-container {
    overflow-y: auto;
    height: 190px;
    }
    table {
    border-spacing: 0;
    width:100%;
    }
    
    
    td, th {
      border: 1px solid #ddd;
    padding: 7px 25px;
    }
    th {
    height: 0;
    line-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    color: transparent;
    border: none;
    white-space: nowrap;
    }
    th div{
    position: absolute;
    background: transparent;
    color: #fff;
    padding: 9px 25px;
    top: 0;
    margin-left: -25px;
    line-height: normal;
    border-left: 1px solid #ddd;
    }

    
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:nth-child(odd) {
      background-color: #fff;
    }
    tr:hover {
      background-color: #ddd;
    }
    

      .todayAnniversary {
        color: red;
        font-weight: bold;
      }

      .upcomingAnniversary {
        color: black;
      }

      .empty {
        text-align: center;
        vertical-align: middle;
        line-height: 190px;
        font-size: 35px;
        color: rgb(135, 202, 204);
        height: 220px;
        transform: rotate(340deg);
      }
    `,
  ],
})
export class CelebrationTableComponent implements OnInit {
  constructor(
    private registerUser: RegisterUserService,
    private router: Router,
    private route: ActivatedRoute,
    private localService: LocalService,
    private userService: UserService
  ) {}

  celebrationDetails: CelebrationDetails[] = [
    // {
    //   name: "Krutik Vaishnav",
    //   doj: new Date("04/12/2023").toLocaleDateString(),
    // },
    // {
    //   name: "Shoaib Akhtar",
    //   doj: new Date("04/12/2023").toLocaleDateString()
    // },
    // {
    //   name: "Amod Sah",
    //   doj: new Date("04/12/2023").toLocaleDateString()
    // },
    // {
    //   name: "Faizan Shaik",
    //   doj: new Date("04/12/2023").toLocaleDateString()
    // },
    // {
    //   name: "Prateek Kumar",
    //   doj: new Date("04/12/2023").toLocaleDateString()
    // }
  ];
  todayDate: string = new Date().toLocaleDateString();

  ngOnInit(): void {
    if(this.localService.getWorkData() === null){
      this.localService.saveWorkData(this.celebrationDetails);
    
    }else{
      this.celebrationDetails = this.localService.getWorkData();
    
    }
  }

  onDashboard() {
    this.router.navigate(['../dashboard'], { relativeTo: this.route });
  }
}
