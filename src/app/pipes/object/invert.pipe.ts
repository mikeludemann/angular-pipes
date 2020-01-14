import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invert'
})
export class InvertPipe implements PipeTransform {

  transform(input: any): any {
    if ((input === null || typeof input === 'undefined') || Array.isArray(input) || typeof input !== "object") return input;

    const object: any = {};

    for (const data in input) {
      if (!!!object[input[data]]) {
        object[input[data]] = [];
      }

      object[input[data]].push(data);
    }

    return object;
  }

}
