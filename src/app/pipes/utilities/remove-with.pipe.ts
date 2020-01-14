import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWith'
})
export class RemoveWithPipe implements PipeTransform {

  transform(input: any, object?: any): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function containObject(partial, object) {

      var keys = Object.keys(partial);

      return keys.map(function (el) {

        return (object[el] !== undefined) && (object[el] == partial[el]);

      }).indexOf(false) == -1;

    }

    if (!Array.isArray(input)) {

      input = convertToArray(input);

    }

    if (!Array.isArray(input) || typeof object === "undefined") {

      return input;

    }

    return input.filter((element: any) => !containObject(object, element));

  }

}
