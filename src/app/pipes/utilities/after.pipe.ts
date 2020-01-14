import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'after'
})
export class AfterPipe implements PipeTransform {

  transform(input: any, count: number = 0): Array<any> {
    
    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    if (!Array.isArray(input)) {
      input = convertToArray(input);
    }
    if (!Array.isArray(input)) {
      return input;
    }

    return input.slice(count);
  }

}
