import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.trunc(convert);
  }

}
