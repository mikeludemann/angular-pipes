import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(input: any, delimiter: any = ' '): string {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    if (!Array.isArray(input)) {

      input = convertToArray(input);
      
    }

    return input.join(String(delimiter));
  }

}
