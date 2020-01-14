import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lefttrim'
})
export class LefttrimPipe implements PipeTransform {

  transform(input: string, character: string = '\\s'): string {
    return input.replace(new RegExp('^' + character + '+'), '');
  }

}
