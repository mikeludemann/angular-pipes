import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseFirst'
})
export class UppercaseFirstPipe implements PipeTransform {

  transform(input: string): string {
    return input.split(' ').map(function (character) { return character.charAt(0).toUpperCase() + character.substring(1); }).join(' ');
  }

}
