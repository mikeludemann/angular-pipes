import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBy'
})
export class CountByPipe implements PipeTransform {

  transform(input: any, query: any): { [key: string]: number } {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    let result: { [key: string]: number },
      //get = String(query),
      props;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof query === undefined) {

      return input;

    }

    input.forEach(function (element: string) {

      element = query;

      props = String(element);

      if (!result[props]) {

        result[props] = 0;

      }

      result[props]++;

    });

    return result;
  }

}
