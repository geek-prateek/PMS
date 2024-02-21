import { Pipe, PipeTransform } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";

@Pipe({
    name: 'sort'
})
export class SortingPipe implements PipeTransform{
    transform(value: any[], param: string) {
        if(param === 'ascending'){
            return value.sort();
        } else{
            return value.sort().reverse();
        }
    }
}