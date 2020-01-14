import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radians'
})
export class RadiansPipe implements PipeTransform {

  transform(degrees: number, decimal: number): number {
    if (typeof decimal === "number" && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 && typeof degrees === "number" && isFinite(degrees)) {
      const radians = (degrees * 3.14159265359) / 180;
      
      return Math.round(radians * Math.pow(10, decimal)) / (Math.pow(10, decimal));
    }
    return NaN;
  }

}
