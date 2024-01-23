import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../login/user.service";
import { DashboardService } from "../../dashboard/dashboard.service";
import { DsrDetails } from "../tableDetails";

@Component({
    selector: 'app-dsr-table',
    templateUrl: './dsr-table.component.html',
    styleUrls: ['./dsr-table.component.css']
})
export class DsrTableComponent{
   // @Input() show: boolean = false;
   dsrTable: DsrDetails[] = [];
   search: string="";
   value: number = 0;
   status: string = "";
   
   constructor(public table: DashboardService ,public userService: UserService, private router: Router, private route: ActivatedRoute){}

   ngOnInit(){
       this.dsrTable = this.table.dsrtable;
       
   }
   
   onClick(event : any){
       console.log(event);
    //    this.companyService.items = event;
       
       // this.userService.flag = true;
    //    this.router.navigate(['../company-edit'], {queryParams: {name: this.companyService.items.name, address: this.companyService.items.address},relativeTo:this.route});
   }

   onReturn(){
       this.userService.logout();
   }
  
   // onSubmit(event: any){
   //     this.show = event;
   //     this.userService.flag = false;
   // }
}