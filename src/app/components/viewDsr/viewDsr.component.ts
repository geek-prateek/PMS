import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { DsrDetails } from "src/app/Model/tableDetails";
import { DashboardService } from "src/app/services/dashboard.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-view-dsr",
    templateUrl: "./viewDsr.component.html",
    styles: [`
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

#tableBody{
    height: 50vh;
}

.empty{
    text-align: center;
    line-height: 400px;
    color: rgb(194, 194, 194);
    
  }

  .pendingStatus{
  color: rgb(235, 125, 74);
  border: 1px solid rgb(235, 125, 74);
}

.completeStatus{
  color: green;
  border: 1px solid green;
}

.edit{
  color: green;
}

    `]
})
export class ViewDsrComponent implements OnInit{
    constructor(private dashboardService: DashboardService, private userService: UserService) {}
    pageSize: number=10;
    currentPage: number = 0;
    lowValue: number = 0;
    highValue: number = 20;
    dsrTable: DsrDetails[] = [];
    userId: number = this.userService.getUserIdfromLocal();
    ngOnInit(): void {
        this.dashboardService.getDsrDetails().subscribe({
            next: (data) => {
                const filteredData = data.filter(
                    (element: any) => element.userId === this.userId
                  );
                  this.dsrTable = filteredData;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
    onPageChanged(event : PageEvent){
        this.lowValue = event.pageIndex * event.pageSize;
        this.highValue = this.lowValue + event.pageSize;
        return event;
    }
}