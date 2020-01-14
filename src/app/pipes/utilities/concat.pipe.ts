import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(input: any, join: any): Array<any> {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    if (typeof join === undefined) {

      return input;

    }

    if (Array.isArray(input)) {

      return isObject(join) ? input.concat(convertToArray(join)) : input.concat(join);

    }

    if (isObject(input)) {

      var array = convertToArray(input);

      return (isObject(join)) ? array.concat(convertToArray(join)) : array.concat(join);

    }

    return input;
  }

}
