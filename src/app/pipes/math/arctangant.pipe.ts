import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arctangant'
})
export class ArctangantPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.atan(convert);
  }

}
