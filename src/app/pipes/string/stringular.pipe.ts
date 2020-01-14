import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringular'
})
export class StringularPipe implements PipeTransform {

  transform(template: string, ...args: string[]): string {
    return template.replace(/{(\d+)}/g, (match, index) => {
      return typeof args[index] === "undefined" ? match : args[index];
    });
  }

}
