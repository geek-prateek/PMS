import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { WorkDetails } from "../../workDetails";
import { DashboardService } from "../../../../services/dashboard.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { QualificationModalComponent } from "./qualification-modal/qualification-modal.component";
import { MatDialog } from "@angular/material/dialog";


@Component({
    selector: 'app-qualification-details',
    templateUrl: './qualification-details.component.html',
    styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetails implements OnInit{

    constructor(private dashboardService: DashboardService, private _dialog: MatDialog){}
    @Input() workDetails!: WorkDetails[];
    displayedColumns: string[] = ['companyName', 'jobTitle', 'from', 'to', 'actions'];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngOnInit(){
        this.getWorkDetails();
    }

    openAddEditModal(){
        this._dialog.open(QualificationModalComponent);
    }
    getWorkDetails(){
        this.dashboardService.getWorkDetails().subscribe({
            next: (data) => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    openEditModal(data: any){

    }

    deleteWorkData(id: number){
        this.dashboardService.deleteWorkDetails(id).subscribe({
            next: (data) => {
                console.log(data);
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

    onDelete(item: number){
        this.dashboardService.deleteWorkDetails(item);
    }

    onEdit(item: number){
        this.dashboardService.editWorkDetails(item);
    }
}