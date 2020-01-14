import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sin'
})
export class SinPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.sin(convert * Math.PI / 180);
  }

}
