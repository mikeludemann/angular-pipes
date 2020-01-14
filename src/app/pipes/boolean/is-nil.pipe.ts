import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNil'
})
export class IsNilPipe implements PipeTransform {

  transform(input: any): boolean {
    return (input === null || typeof input === 'undefined') ? true : false;
  }

}
