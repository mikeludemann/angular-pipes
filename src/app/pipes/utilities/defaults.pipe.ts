import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaults'
})
export class DefaultsPipe implements PipeTransform {

  transform(input: any, defaults: {[key: string]: any}): Array<any> {

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function getKeys(object, stack, parent) {

      stack = stack || [];
      var keys = Object.keys(object);

      keys.forEach(function (element) {

        if (isObject(object[element]) && !Array.isArray(object[element])) {

          var p = parent ? parent + '.' + element : parent;
          getKeys(object[element], stack, p || element);

        } else {

          var key = parent ? parent + '.' + element : element;
          stack.push(key)

        }

      });

      return stack

    }

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || !isObject(defaults)) {

      return input;

    }

    let keys = getKeys(defaults,"","");

    input.forEach(function (element) {

      keys.forEach(function (key) {

        if (typeof key(element) === undefined) {

          key(element, key(defaults))

        }

      });

    });

    return input;

  }

}
