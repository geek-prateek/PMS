import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { TicketsDetails } from "src/app/Model/ticketsDetails";
import { DashboardService } from "src/app/services/dashboard.service";
import { UserService } from "src/app/services/user.service";
import { HelpDeskApplyComponent } from "./help-desk-apply/help-desk-apply.component";
import { PageEvent } from "@angular/material/paginator";

@Component({
    selector: "app-helpDesk",
    templateUrl: "./helpDesk.component.html",
    styleUrls: ["./helpDesk.component.css"],

})
export class HelpDeskComponent{
  pageSize: number=10;
    currentPage: number = 0;
    lowValue: number = 0;
    highValue: number = 20;
    userId: number = this.userService.getUserIdfromLocal();
    ticketsTable: TicketsDetails[] = [];
    
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  
   
    onPageChanged(event: PageEvent) {
      this.lowValue = event.pageIndex * event.pageSize;
      this.highValue = this.lowValue + event.pageSize;
      return event;
    }
  
    constructor(private _formBuilder: FormBuilder,private dashboardService: DashboardService,
      private userService: UserService,
      private _dialog: MatDialog) {}

    ngOnInit() {
      this.getTicketsData();
    }

    openAddEditModal() {
      const dialogRef = this._dialog.open(HelpDeskApplyComponent);
      dialogRef.afterClosed().subscribe({
        next: (data) => {
          if (data) {
            console.log(data);
  
            this.getTicketsData();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  
    getTicketsData() {
      this.dashboardService.getTicketsDetails().subscribe({
        next: (data) => {
          const filteredData = data.filter(
            (element: any) => element.ticketId === this.userId
          );
          this.ticketsTable = filteredData;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    openEditModal(data: any) {
      const dialogRef = this._dialog.open(HelpDeskApplyComponent, {
        data,
      });
  
      dialogRef.afterClosed().subscribe({
        next: (data) => {
          if (data) {
            
            this.getTicketsData();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  
    deletedeleteData(id: number) {
      this.dashboardService.deleteTicketsDetails(id).subscribe({
        next: (data) => {
          console.log(data);
  
          this.getTicketsData();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
