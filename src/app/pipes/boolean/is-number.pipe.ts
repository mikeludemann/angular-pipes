import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNumber'
})
export class IsNumberPipe implements PipeTransform {

  transform(input: any): boolean {
    return (typeof input === 'number') ? true : false;
  }

}
