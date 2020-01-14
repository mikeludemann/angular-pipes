import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(input: any, query: any): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof query === undefined) {

      return input;

    }

    return input.map((element) => String(element));

  }

}
