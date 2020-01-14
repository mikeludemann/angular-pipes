import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunkBy'
})
export class ChunkByPipe implements PipeTransform {

  transform(input: Array<any>, size: number, fill?: any): Array<any> {
    return input.map((el, i, self) => {
      i = i * size; el = self.slice(i, i + size);
      return typeof fill !== "undefined" && el.length < size ? el.concat(this.fill(size - el.length, fill)) : el;
    }).slice(0, Math.ceil(input.length / size));
  }

  fill(size: number, value: any): Array<any> {
    const ret: Array<any> = [];
    while (size--) ret[size] = value;
    return ret;
  }

}
