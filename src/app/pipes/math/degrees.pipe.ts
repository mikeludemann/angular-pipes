import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {

  transform(radians: number, decimal: number): number {
    if (typeof decimal === "number" && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 && typeof radians === "number" && isFinite(radians)) {
      const degrees = (radians * 180) / Math.PI;
      
      return Math.round(degrees * Math.pow(10, decimal)) / (Math.pow(10, decimal));
    }
    return NaN;
  }

}
