import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(input: string): string {
    return input.toUpperCase();
  }

}
