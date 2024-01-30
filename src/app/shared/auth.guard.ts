import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../components/login/auth.service";
import { HolidayComponent } from "../components/holiday/holiday.component";
import { HolidayService } from "../components/holiday/holiday.service";

export const CanActivate=()=>{
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isAuthenticated()){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
}

export const CanActivateChild=()=>{
    return CanActivate();
}

export const resolve=()=>{
    const holidayService = inject(HolidayService);
    return holidayService.getHolidayDetails();
}