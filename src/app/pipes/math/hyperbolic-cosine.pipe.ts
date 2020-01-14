import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyperbolicCosine'
})
export class HyperbolicCosinePipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.cosh(convert);
  }

}
