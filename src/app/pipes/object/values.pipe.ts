import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(input: any): any {
    return (input === null || typeof input === 'undefined') || Array.isArray(input) || typeof input !== "object"  ? input : Object.keys(input).map(value => input[value]);;
  }

}
