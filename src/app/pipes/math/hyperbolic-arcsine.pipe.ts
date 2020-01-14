import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyperbolicArcsine'
})
export class HyperbolicArcsinePipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.asinh(convert);
  }

}
