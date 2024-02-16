import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }
    
    onDashboard(){
        this.router.navigate(['/head/dashboard']);
    }

    onHoliday(){
        this.router.navigate(['/head/holiday']);
    }

    onLeave(){
        this.router.navigate(['/head/leave']);
    }
    openSnackBar(message: string, action: string = 'ok') {
        this._snackBar.open(message,action, {
          duration: 1000,
          verticalPosition: 'bottom',
        });
      }
}