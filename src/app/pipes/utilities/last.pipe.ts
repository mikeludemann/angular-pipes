import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform(input: any, ...args: any[]): any {

    function getFirstElementMatch(array, index, query) {

      var count = 0;

      return array.filter(function (element) {

        var different = (typeof query !== undefined) ? (count < index && query(element)) : count < index;

        count = different ? count + 1 : count;

        return different;

      });

    }

    function isNumber(value) {

      return (typeof value === "number" && value !== null);

    }

    input = input.slice().reverse();

    let index = (isNumber(args[0])) ? args[0] : 1;
    let getter = (!isNumber(args[0])) ? args[0] : (!isNumber(args[1])) ? args[1] : undefined;

    return args.length ? getFirstElementMatch(input, index, getter ? String(getter) : getter).reverse() : input[0];

  }

}
