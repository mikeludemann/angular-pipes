import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLess'
})
export class IsLessPipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input < validator;
  }

}
