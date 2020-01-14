import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFunction'
})
export class IsFunctionPipe implements PipeTransform {

  transform(input: any): boolean {
    return (typeof input === 'function') ? true : false;
  }

}
