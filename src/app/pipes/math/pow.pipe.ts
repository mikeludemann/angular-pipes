import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(input: any, power: any = 2): number {
    const num: number = parseFloat(input);
    const parsePow: number = parseInt(power, 10);

    if (isNaN(num)) return input;

    return Math.pow(num, (isNaN(parsePow)) ? 2 : parsePow);
  }

}
