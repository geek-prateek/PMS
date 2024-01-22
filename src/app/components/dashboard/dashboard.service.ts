import { Injectable } from "@angular/core";
import { DsrDetails } from "../dsr/tableDetails";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    order: string = "";
    dsrtable: DsrDetails[]=[]
}