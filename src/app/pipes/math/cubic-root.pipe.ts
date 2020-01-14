import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubicRoot'
})
export class CubicRootPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.cbrt(convert);
  }

}
