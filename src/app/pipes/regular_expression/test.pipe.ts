import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(input: any, pattern: any, matching: any): any {
    var regexp = new RegExp(pattern, matching);

    return (typeof input === "string") ? regexp.test(input) : input;
  }

}
