import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotEqual'
})
export class IsNotEqualPipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input != validator;
  }

}
