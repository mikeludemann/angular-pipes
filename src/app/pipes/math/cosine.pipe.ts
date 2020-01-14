import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cosine'
})
export class CosinePipe implements PipeTransform {

  transform(input: any): number {
    var convert = (typeof input === 'string') ? Number(input) : input;

    return Math.cos(convert * Math.PI / 180);
  }

}
