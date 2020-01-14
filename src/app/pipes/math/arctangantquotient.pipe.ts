import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arctangantquotient'
})
export class ArctangantquotientPipe implements PipeTransform {

  transform(input: any, quotient: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;
    var convertSecond = (typeof quotient === 'string') ? Number(quotient) : quotient;

    return Math.atan2(convert,convertSecond);
  }

}
