import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isString'
})
export class IsStringPipe implements PipeTransform {

  transform(input: any): boolean {
    return (typeof input === 'string') ? true : false;
  }

}
