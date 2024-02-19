import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { WorkDetails } from "../../workDetails";
import { DashboardService } from "../../../../services/dashboard.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { QualificationModalComponent } from "./qualification-modal/qualification-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { EmpAddEditComponent } from "src/app/shared/emp-add-edit/emp-add-edit.component";
import { LocalService } from "src/app/services/localService";
import { RoutingService } from "src/app/services/routing.service";
import { UserService } from "src/app/services/user.service";


@Component({
    selector: 'app-qualification-details',
    templateUrl: './qualification-details.component.html',
    styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetails implements OnInit{

    constructor(private dashboardService: DashboardService, private _dialog: MatDialog, private routing: RoutingService, private userService: UserService){}
    @Input() workDetails!: WorkDetails[];
    displayedColumns: string[] = ['companyName', 'jobTitle', 'from', 'to', 'actions'];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    userId: number = this.userService.getUserID();

    ngOnInit(){
        this.getWorkDetails();
    }

    openAddEditModal(){
        const dialogRef = this._dialog.open(EmpAddEditComponent);
        dialogRef.afterClosed().subscribe({
            next: (data) => {
                if(data){
                    this.getWorkDetails();
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
    getWorkDetails(){
        this.dashboardService.getWorkDetails().subscribe({
            next: (data) => {
                data.forEach((element: any) => {
                    if(element.userId === this.userId){
                        this.dashboardService.getWorkDetails().subscribe({
                            next: (data) => {
                                this.dataSource = new MatTableDataSource(data);
                                this.dataSource.sort = this.sort;
                                this.dataSource.paginator = this.paginator; 
                            },
                            error: (err) => {
                                console.log(err);
                            }
                        });
                        
                        // this.dataSource = new MatTableDataSource(data);
                        // this.dataSource.sort = this.sort;
                        // this.dataSource.paginator = this.paginator; 
                    }
                    console.log(element.userId, this.userId);
                    
                });
                
            },
            error: (err) => {
                console.log(err);
            }
        })
    }



    deleteWorkData(id: number){
        this.dashboardService.deleteWorkDetails(id).subscribe({
            next: (data) => {
                console.log(data);
                this.routing.openSnackBar('Work Details Deleted Successfully', 'Done');
                this.getWorkDetails();
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }

    

      openEditModal(data: any){
        const dialogRef = this._dialog.open(EmpAddEditComponent, {
            data,
        });

        dialogRef.afterClosed().subscribe({
            next: (data) => {
                if(data){
                    this.getWorkDetails();
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
        
    }
}