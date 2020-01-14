import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(input: any): boolean {

    function isEmpty(value) {

      return value === "";

    }

    return isEmpty(input);
  }

}
