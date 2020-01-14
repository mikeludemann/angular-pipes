import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(input: any, available: boolean = true): Array<any> {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    if (!isObject(input)) {

      return input;

    }

    return !available ? convertToArray(input) : Object.keys(input).map(function (key) {

      return Object.assign(input[key], { $key: key });

    });

  }

}
