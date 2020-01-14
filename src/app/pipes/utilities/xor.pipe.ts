import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xor'
})
export class XorPipe implements PipeTransform {

  transform(input: any, object: any, query: boolean = false): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    /*
    function containsObject(partial, object) {

      let keys = Object.keys(partial);

      return keys.map(function (el) {

        return (object[el] !== undefined) && (object[el] == partial[el]);

      }).indexOf(false) == -1;

    }
    */

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function equals(firstObject, secondObject) {

      return firstObject === secondObject;

    }

    input = isObject(input) ? convertToArray(input) : input;
    object = isObject(object) ? convertToArray(object) : object;

    if (!Array.isArray(input) || !Array.isArray(object)) {

      return input;

    }

    return input.concat(object).filter(function (element: any) {

      return !(some(element, input, query) && some(element, object, query));

    });

    function some(element: any, column: Array<any>, query?: any) {

      let getter = query;

      return column.some(function (dataElement) {

        return query ? equals(getter(dataElement), getter(element)) : equals(dataElement, element);

      });

    }

  }

}
