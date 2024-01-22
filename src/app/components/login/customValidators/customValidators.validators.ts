import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators{
    static noSpaceAllowed(control: AbstractControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed : true}
        }
        return null;
    }

    static passwordMatch(control: AbstractControl) {
        if(control.get('password')?.value !== control.get('confirmPassword')?.value){
            return {passwordMatch : true};
        }
        return null;
    }
}