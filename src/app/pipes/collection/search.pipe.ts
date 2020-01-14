import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: any[], search: string): any[] {

    if (!input) {
      return [];
    }

    if (!search) {
      return input;
    }

    search = search.toLowerCase();

    return input.filter(element => {
      return element.toLowerCase().includes(search);
    });

  }

}
