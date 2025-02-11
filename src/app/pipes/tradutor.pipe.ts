import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tradutor' ,
  standalone: false
})
export class TradutorPipe implements PipeTransform {

  transform(value: string, type: string = 'status'): string {
    const translations: { [key: string]: { [key: string]: string } } = {
      status: {
        'idle': 'PARADO',
        'driving': 'DIRIGINDO',
        'stopped': 'PARADO',
        'moving': 'EM MOVIMENTO',
        'finished': 'FINALIZADA',
        'ongoing': 'EM ANDAMENTO'
      },
      vehicle: {
        'bus': 'Ônibus',
        'truck': 'Caminhão',
        'car': 'Carro'
      }
    };

    return translations[type]?.[value] || value; 
  }
}
