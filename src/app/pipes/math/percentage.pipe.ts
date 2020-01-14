import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(input: any, divided: number = 100, round: boolean = false): any {
    let divider: any = input;
    if (typeof input === "string") {
      divider = Number(input);
    }
    if (typeof divider !== "number" || isNaN(divider)) {
      return input;
    }
    return round ? Math.round((divider / divided) * 100) : (divider / divided) * 100;
  }

}
