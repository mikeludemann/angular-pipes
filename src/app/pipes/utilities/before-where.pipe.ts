import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beforeWhere'
})
export class BeforeWherePipe implements PipeTransform {

  transform(input: any, search: { [key: string]: any }): Array<any> {

    function containsObject(partial, object) {

      var keys = Object.keys(partial);

      return keys.map(function (el) {

        return (object[el] !== undefined) && (object[el] == partial[el]);

      }).indexOf(false) == -1;

    }

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

    let index = input.map((e: { [key: string]: any }) => containsObject(search, e)).indexOf(true);

    return input.slice(0, index === -1 ? input.length : index + 1);
  }

}
