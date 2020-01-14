import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class LowerPipe implements PipeTransform {

  transform(input: string): string {
    return input.toLowerCase();
  }

}
