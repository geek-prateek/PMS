import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { DashboardService } from "../../../services/dashboard.service";
import { DsrDetails } from "../tableDetails";
import { Observable } from "rxjs";

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

//    getDsrDetails(){
//     this.table.getDsrDetails().subscribe({
//       next: (data) => {
//         console.log(data);
//       },
//       error: (err) => {
//         console.log(err);
//       }
    
//     })
//   }

   onView(item: number){
    
   }

   onEdit(item: number){

   }

   onDelete(item: number){
        this.table.deleteDsrDetails(item);
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