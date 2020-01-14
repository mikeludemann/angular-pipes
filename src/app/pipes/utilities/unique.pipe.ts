import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(input: any, property: any): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input)) {

      return input;

    }

    if (typeof property === "undefined") {

      return input.filter((element: any, position: number, self: Array<any>) => self.indexOf(element) === position);

    }

    let getter = property,
      unique: Array<any> = [];

    return input.filter((element: any) => {

      let value = getter(element);

      if (typeof value !== "undefined" && unique.some((uniqueElement: any) => uniqueElement === value)) {

        return false;

      }
      unique.push(value);

      return true;

    });

  }

}
