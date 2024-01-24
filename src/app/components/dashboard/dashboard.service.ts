import { Injectable } from "@angular/core";
import { DsrDetails } from "../dsr/tableDetails";
import { WorkDetails } from "./workDetails";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    order: string = "";
    dsrtable: DsrDetails[]=[];

    workDetails: WorkDetails[]=[];

    addWorkDetails(item: WorkDetails){
        this.workDetails.push(item);
    }

    deleteWorkDetails(item: number){
        this.workDetails.splice(item,1);
    }

    deleteDsrDetails(item: number){
        this.dsrtable.splice(item,1);
    }

    editWorkDetails(item: number){

    }
}