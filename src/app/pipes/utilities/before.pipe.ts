import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'before'
})
export class BeforePipe implements PipeTransform {

  transform(input: any, query: number = 1): Array<any> {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    
    input = isObject(input) ? convertToArray(input) : input;

    return (Array.isArray(input)) ? input.slice(0, (!query) ? query : --query) : input;
  }

}
