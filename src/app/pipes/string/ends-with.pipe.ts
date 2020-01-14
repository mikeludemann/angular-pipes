import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endsWith'
})
export class EndsWithPipe implements PipeTransform {

  transform(input: string, end?: string, setCaseSensitive: boolean = false): any {
    var sensitive = setCaseSensitive || false,
      getPosition;

    if (end == '') {
      return true;
    }

    if (typeof input != "string" || typeof end == "undefined") {

      return input;

    }

    input = (sensitive) ? input : input.toLowerCase();
    getPosition = input.length - end.length;

    return input.indexOf((sensitive) ? end : end.toLowerCase(), getPosition) !== -1;
  }

}
