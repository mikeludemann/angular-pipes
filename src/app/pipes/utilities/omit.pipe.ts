import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'omit'
})
export class OmitPipe implements PipeTransform {

  transform(input: any, search: any): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof search === undefined) {

      return input;

    }

    return input.filter((element) => !(String(element)));

  }

}
