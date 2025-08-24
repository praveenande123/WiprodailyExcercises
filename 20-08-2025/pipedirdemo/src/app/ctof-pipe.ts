import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ctof',
  standalone: true 
})
export class CtofPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
   
    if (value === null || value === undefined) return '';
    const fahrenheit = (value * 9/5) + 32;
    return `${fahrenheit}F`;
  }

}
