import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObject'
})
export class IsObjectPipe implements PipeTransform {

  transform(input: any): boolean {
    return (typeof input === 'object') ? true : false;
  }

}
