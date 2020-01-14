import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLessEqual'
})
export class IsLessEqualPipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input <= validator;
  }

}
