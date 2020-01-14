import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isUndefined'
})
export class IsUndefinedPipe implements PipeTransform {

  transform(input: any): boolean {
    return typeof input === 'undefined' ? true : false;
  }

}
