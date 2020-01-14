import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logarithm'
})
export class LogarithmPipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.log(convert);
  }

}
