import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDefined'
})
export class IsDefinedPipe implements PipeTransform {

  transform(input: any): boolean {
    return typeof input !== 'undefined' ? true : false;
  }

}
