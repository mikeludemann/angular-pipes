import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(input: any, properties: string[], search?: any, strict: boolean = false): Array<any> {
    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function isString(value) {

      return (typeof value === "string" && value !== null);

    }

    function isNumber(value) {

      return (typeof value === "number" && value !== null);

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    var comparator;

    search = (isString(search) || isNumber(search)) ? String(search).toLowerCase() : undefined;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof search === undefined) {

      return input;

    }

    return input.filter(function (element: any) {

      return properties.some(function (prop: string) {

        if (!~prop.indexOf('+')) {

          comparator = Object.assign(prop, element);

        } else {

          var propertyList = prop.replace(/\s+/g, '').split('+');

          comparator = propertyList.map(function (prop) {

            return Object.assign(prop, element);

          }).join(' ');

        }

        if (!isString(comparator) && !isNumber(comparator)) {

          return false;

        }

        comparator = String(comparator).toLowerCase();

        return strict ? comparator === search : comparator.indexOf(search) !== -1;

      });

    });
  }

}
