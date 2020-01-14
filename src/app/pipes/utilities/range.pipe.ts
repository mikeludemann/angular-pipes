import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(input: number[], total: number = 0, start: number = 0, increment: number = 1, callback?: Function): any {

    function isFunction(callback) {

      return callback && {}.toString.call(callback) === '[object Function]';

    }

    for (let i = 0; i < total; i++) {
      const j = start + i * increment;
      input.push(isFunction(callback) ? callback(j) : j);
    }
    
    return input;
  }

}
