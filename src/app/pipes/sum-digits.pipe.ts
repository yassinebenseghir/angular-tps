import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumDigitsPipe'
})
export class SumDigitsPipePipe implements PipeTransform {

    transform(value: number | string): number {
      if (!value) return 0;

      // Convertir en string, séparer les chiffres, les convertir en nombres et les additionner
      return value
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, num) => acc + num, 0);
    }
  }
