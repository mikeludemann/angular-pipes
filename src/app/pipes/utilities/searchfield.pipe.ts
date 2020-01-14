import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfield'
})
export class SearchfieldPipe implements PipeTransform {

  transform(input: any, ...args: any[]): any {
    
    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    var getter,
      field;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || !args.length) {

      return input;

    }

    return input.map(function (position: any) {

      field = args.map(function (field: any) {

        getter = String(field);

        return getter(position);

      }).join(' ');

      return Object.assign(position, { searchfield: field });

    });

  }

}
