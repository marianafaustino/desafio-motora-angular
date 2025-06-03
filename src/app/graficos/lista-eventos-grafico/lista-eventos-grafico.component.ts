import { Component } from '@angular/core';

export interface DriverEvent {
  driverName: string;
  eventDate: string; 
  eventType: string;
  speed: number;
}

@Component({
  selector: 'app-lista-eventos-grafico',
  standalone: false,
  templateUrl: './lista-eventos-grafico.component.html',
  styleUrl: './lista-eventos-grafico.component.css'
})
export class ListaEventosGraficoComponent {
  events: DriverEvent[] = [
    { driverName: 'Jose Carlos Pereira', eventDate: '01/04/2025 23:16:37', eventType: 'Distância não segura', speed: 68.63 },
    { driverName: 'Jose Carlos Pereira', eventDate: '02/04/2025 00:47:07', eventType: 'Distração', speed: 44.61 },
    { driverName: 'Cristiano Pereira Ribeiro', eventDate: '02/04/2025 08:14:44', eventType: 'Velocidade acima do permitido', speed: 98.54 },
    { driverName: 'Cristiano Pereira Ribeiro', eventDate: '02/04/2025 08:15:05', eventType: 'Velocidade acima do permitido', speed: 97.65 },
    { driverName: 'Cristiano Pereira Ribeiro', eventDate: '02/04/2025 08:15:25', eventType: 'Velocidade acima do permitido', speed: 100.67 }
  ];

  formatDate(dateString: string): string {
    return dateString;
  }
}
