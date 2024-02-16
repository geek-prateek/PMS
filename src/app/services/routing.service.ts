import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private router: Router, private route: ActivatedRoute) { }
    
    onDashboard(){
        this.router.navigate(['/head/dashboard']);
    }

    onHoliday(){
        this.router.navigate(['/head/holiday']);
    }

    onLeave(){
        this.router.navigate(['/head/leave']);
    }
}