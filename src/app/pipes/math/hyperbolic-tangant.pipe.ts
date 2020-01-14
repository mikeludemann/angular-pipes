import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyperbolicTangant'
})
export class HyperbolicTangantPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.tanh(convert);
  }

}
