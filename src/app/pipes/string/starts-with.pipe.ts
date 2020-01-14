import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

  transform(input: string, start?: string, setCaseSensitive: boolean = false): any {
    var sensitive = setCaseSensitive || false;

    if (typeof input != "string" || typeof start == "undefined") {

      return input;

    }

    input = (sensitive) ? input : input.toLowerCase();

    return input.indexOf((sensitive) ? start : start.toLowerCase())
  }

}
