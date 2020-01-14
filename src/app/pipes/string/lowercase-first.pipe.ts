import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseFirst'
})
export class LowercaseFirstPipe implements PipeTransform {

  transform(input: string): string {
    return input.split(' ').map(function (character) { return character.charAt(0).toLowerCase() + character.substring(1); }).join(' ');
  }

}
