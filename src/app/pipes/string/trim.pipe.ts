import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(input: string, character: string = '\\s'): string {
    return input.replace(new RegExp('^' + character + '+|' + character + '+$', 'g'), '');
  }

}
