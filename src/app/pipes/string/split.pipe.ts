import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(input: string, separator: string = ' ', limit?: number): any {
    function escapeRegularExpression(input) {

      return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

    }

    function isNull(input) {

      return input === null;

    }

    var regexp,
      matching,
      splitter,
      tmp;

    if (typeof input === "undefined" || typeof input !== "string") {

      return null;

    }

    if (typeof separator === "undefined") {

      separator = '';

    }

    if (isNaN(limit) || limit == null) {

      limit = 0;

    }

    regexp = new RegExp(escapeRegularExpression(separator), 'g');
    matching = input.match(regexp);

    if (isNull(matching) || limit >= matching.length) {

      return [input];

    }

    if (limit === 0) {

      return input.split(separator);

    }

    splitter = input.split(separator);
    tmp = splitter.splice(0, limit + 1);
    splitter.unshift(tmp.join(separator));

    return splitter;
  }

}
