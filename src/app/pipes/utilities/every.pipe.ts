import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'every'
})
export class EveryPipe implements PipeTransform {

  transform(input: any, query: any): Array<any> {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function isString(value) {

      return (typeof value === "string" && value !== null);

    }

    function isFunction(callback) {

      return callback && {}.toString.call(callback) === '[object Function]';

    }

    input = isObject(input) ? convertToArray(input) : input;

    return input.every((element) => isFunction(query) || (isObject(element) && isString(query)) ? String(element) : element === query);
  }

}