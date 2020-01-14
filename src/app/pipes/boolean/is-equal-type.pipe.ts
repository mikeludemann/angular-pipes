import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEqualType'
})
export class IsEqualTypePipe implements PipeTransform {

  transform(input: any, validator: any): boolean {
    return input === validator;
  }

}
