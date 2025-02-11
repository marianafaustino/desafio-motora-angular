import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'idle') {
      return 'PARADO';
    } else if (value === 'driving') {
      return 'DIRIGINDO';
    }
    return value;
  }
}
