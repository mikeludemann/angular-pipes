import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEqual'
})
export class IsEqualPipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input == validator;
  }

}
