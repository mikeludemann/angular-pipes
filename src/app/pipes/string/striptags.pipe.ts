import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'striptags'
})
export class StriptagsPipe implements PipeTransform {

  transform(input: string): string {
    return input.replace(/<\S[^><]*>/g, '');
  }

}
