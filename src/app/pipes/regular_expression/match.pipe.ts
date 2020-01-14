import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'match'
})
export class MatchPipe implements PipeTransform {

  transform(input: any, pattern: any, matching: any): any {
    var regexp = new RegExp(pattern, matching);

    return (typeof input === "string") ? input.match(regexp) : input;
  }

}
