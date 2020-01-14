import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arcsine'
})
export class ArcsinePipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.asin(convert);
  }

}
