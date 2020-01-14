import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNull'
})
export class IsNullPipe implements PipeTransform {

  transform(input: any): boolean {
    
    function isNull(value) {

      return value === null;

    }

    return isNull(input);
  }

}
