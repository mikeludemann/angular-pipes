import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyperbolicArccosine'
})
export class HyperbolicArccosinePipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.acosh(convert);
  }

}
