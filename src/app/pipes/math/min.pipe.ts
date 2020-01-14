import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {

  transform(input: any): any {
    var values = Object.keys(input).map(function (e) {
      return input[e]
    })

    return (Array.isArray(input) === true) ? Math.min.apply(Math, input) : Math.min(...values);
  }

}
