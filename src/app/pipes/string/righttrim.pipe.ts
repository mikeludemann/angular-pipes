import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'righttrim'
})
export class RighttrimPipe implements PipeTransform {

  transform(input: string, character: string = '\\s'): string {
    return input.replace(new RegExp(character + '+$'), '');
  }

}
