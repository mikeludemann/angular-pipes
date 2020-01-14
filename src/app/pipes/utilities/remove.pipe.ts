import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remove'
})
export class RemovePipe implements PipeTransform {

  transform(input: any, ...args: any[]): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function equals(firstObject, secondObject) {

      return firstObject === secondObject;

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input)) {

      return input;

    }

    return input.filter((element: any) => !args.some((structure: any) => equals(structure, element)));

  }

}