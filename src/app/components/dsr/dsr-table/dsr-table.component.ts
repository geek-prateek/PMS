import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { DashboardService } from '../../../services/dashboard.service';
import { DsrDetails } from '../../../Model/DsrDetails';
import { Observable } from 'rxjs';
import { AddDsrListComponent } from '../addDsrList/addDsrList.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dsr-table',
  templateUrl: './dsr-table.component.html',
  styleUrls: ['./dsr-table.component.css'],
})
export class DsrTableComponent {
  // @Input() show: boolean = false;
  search: string = '';
  value: number = 0;
  status: string = '';

  constructor(
    public dashboardService: DashboardService,
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _dialog: MatDialog,
    
  ) {}

  ngOnInit() {
      //  this.dsrTable = this.dashboardService.dsrtable;
    
  }

  

  




  
}
