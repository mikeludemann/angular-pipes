import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isGreater'
})
export class IsGreaterPipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input > validator;
  }

}
