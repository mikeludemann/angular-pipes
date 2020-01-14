import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmptyDimension'
})
export class IsEmptyDimensionPipe implements PipeTransform {

  transform(input: any): boolean {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    return isObject(input) ? !convertToArray(input).length : !input.length;
  }

}
