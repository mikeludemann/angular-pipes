import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(input: string, counter: number = 1, separator: string = ''): string {
    let result = input;
    while (--counter) {
      result += separator + input;
    }
    return result;
  }

}
