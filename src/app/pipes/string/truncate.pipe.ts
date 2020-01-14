import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(input: string, length?: any, suffix: string = '', status: boolean = false): string {
    if (typeof length === "undefined" || length >= input.length) {
      return input;
    }
    return input.substring(0, status ? (input.indexOf(' ', length) === -1 ? input.length : input.indexOf(' ', length)) : length) + suffix;
  }

}
