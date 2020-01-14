import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euler'
})
export class EulerPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.exp(convert);
  }

}
