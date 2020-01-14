import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arccosine'
})
export class ArccosinePipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.acos(convert);
  }

}
