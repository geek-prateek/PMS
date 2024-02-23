import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { TicketsDetails } from "src/app/Model/ticketsDetails";
import { DashboardService } from "src/app/services/dashboard.service";
import { RoutingService } from "src/app/services/routing.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-help-desk-apply',
    templateUrl: './help-desk-apply.component.html'
})
export class HelpDeskApplyComponent{
    constructor(
        private dashboardService: DashboardService,
        private _http: HttpClient,
        private userService: UserService,
        private _dialogRef: MatDialogRef<HelpDeskApplyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private routing : RoutingService
      ) {}
    
      ticketsForm: FormGroup = new FormGroup({});
      ngOnInit() {
        this.ticketsForm = new FormGroup({
          subject: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required),
        });
        this.ticketsForm.patchValue(this.data);
      }
    
      onAdd() {
        if (this.ticketsForm.valid) {
          if (this.data) {
            const ticketFormDetails: TicketsDetails={
                id: this.data.id,
                ticketId: this.userService.getUserIdfromLocal(),
                subject: this.ticketsForm.value.subject,
                description: this.ticketsForm.value.description,
                status: 'Open',
            
            }
            this.dashboardService
              .updateTicketsDetails(this.data.id, ticketFormDetails)
              .subscribe({
                next: (data) => {
                  console.log(data);
                  this.routing.openSnackBar('Updated Successfully', 'Close')
                  this._dialogRef.close(true);
                },
                error: (err) => {
                  console.log(err);
                },
              });
          } else {
            this.addTicketDetails();
          }
        }
    
        this.onReset();
      }
    
      addTicketDetails() {
        const ticketFormDetails: TicketsDetails={
            id: 0,
            ticketId: this.userService.getUserIdfromLocal(),
            subject: this.ticketsForm.value.subject,
            description: this.ticketsForm.value.description,
            status: 'Open',
        
        }
        this.dashboardService.addTicketsDetails(ticketFormDetails).subscribe({
          next: (data) => {
            console.log(data);
            this.routing.openSnackBar('Added Successfully', 'Close')
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    
      onReset() {
        this.ticketsForm.reset({
            Subject: '',
            description: '',
        });
      }
    }