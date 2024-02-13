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
      #table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      #table td,
      #table th {
        border: 1px solid #ddd;
      }

      #table tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      #table tr:hover {
        background-color: #ddd;
      }

      #table th {
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: left;
        background-color: #7385df;
        color: white;
      }

      .edit {
        color: green;
      }

      .tableFixHead {
        width: 500px;
        table-layout: fixed;
        border-collapse: collapse;
      }
      .tableFixHead tbody {
        width: 100%;
        overflow: auto;
        height: 190px;
        margin-bottom: 12px;
      }
      .tableFixHead th,
      .tableFixHead td {
        padding: 5px 10px;
        width: 200px;
      }
      th {
        background: #abdd93;
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
