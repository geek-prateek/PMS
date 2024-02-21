import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCasePipe'
})
export class TitleCasePipe implements PipeTransform{
    transform(value: any) {
        if(!value){
            return '';    
        }
        return value.toLowerCase().split(' ').map((word: string) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" "); 
    }

}