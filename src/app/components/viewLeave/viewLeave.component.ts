import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { LeaveDetails } from 'src/app/Model/leaveDetails';
import { DashboardService } from 'src/app/services/dashboard.service';
import { UserService } from 'src/app/services/user.service';
import { LeaveApplyComponent } from '../leave/leave-apply/leave-apply.component';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-view-leave',
  templateUrl: './viewLeave.component.html',
  styles: [
    `
      #table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        border: 1px solid black;
      }

      #table td,
      #table th {
        border: 1px solid #ddd;
        padding: 8px;
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

      #tableBody {
        height: 50vh;
      }

      .empty {
        text-align: center;
        line-height: 400px;
        color: rgb(194, 194, 194);
      }
    `,
  ],
})
export class ViewLeaveComponent {
  constructor(
    private userService: UserService,
    private _dialog: MatDialog,
    private leaveService: LeaveService
  ) {}
  pageSize: number = 10;
  currentPage: number = 0;
  lowValue: number = 0;
  highValue: number = 20;
  leaveTable: LeaveDetails[] = [];
  userId: number = this.userService.getUserIdfromLocal();

  ngOnInit(): void {
    this.getLeaveDetails();
  }
  onPageChanged(event: PageEvent) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  openAddEditModal() {
    const dialogRef = this._dialog.open(LeaveApplyComponent);
    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          console.log(data);

          this.getLeaveDetails();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getLeaveDetails() {
    this.leaveService.getLeaveDetails().subscribe({
      next: (data) => {
        
        this.leaveTable = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
