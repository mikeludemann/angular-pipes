import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyperbolicSin'
})
export class HyperbolicSinPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.sinh(convert);
  }

}
