import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: any[], search: string) {
    if (!search) {
      return value;
    }
    return value.filter(
      (v) => v.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  }
}
