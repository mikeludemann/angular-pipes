import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmptyCollection'
})
export class IsEmptyCollectionPipe implements PipeTransform {

  transform(input: any): number {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    if (!Array.isArray(input)) {

      input = convertToArray(input);

    }
    
    return Array.isArray(input) ? input.length : 0;

  }

}
