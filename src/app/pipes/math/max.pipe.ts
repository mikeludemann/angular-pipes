import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(input: any): any {
    var values = Object.keys(input).map(function (e) {
      return input[e]
    })

    return (Array.isArray(input) === true) ? Math.max.apply(Math, input) : Math.max(...values);
  }

}
