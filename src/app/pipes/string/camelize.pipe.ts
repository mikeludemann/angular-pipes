import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelize'
})
export class CamelizePipe implements PipeTransform {

  transform(input: string): string {
    if (!input) return input;

    input = input.toString();

    return input.charAt(0).toUpperCase() + input.slice(1);
  }

}
