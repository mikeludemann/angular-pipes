import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(array: any, initial: number = 0): any {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.reduce(function (previous: any, current: any) {
      return previous + current;
    }, initial);
  }

}
