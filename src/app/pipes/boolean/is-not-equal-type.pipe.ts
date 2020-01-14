import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotEqualType'
})
export class IsNotEqualTypePipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input !== validator;
  }

}
