import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isGreaterEqual'
})
export class IsGreaterEqualPipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input >= validator;
  }

}
