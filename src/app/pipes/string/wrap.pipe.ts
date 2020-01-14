import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {

  transform(input: string, wrapping: any = '', end: any = ''): string {
    return '' + wrapping + input + (end || wrapping);
  }

}
