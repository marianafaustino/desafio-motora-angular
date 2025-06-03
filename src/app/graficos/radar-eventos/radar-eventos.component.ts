import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-radar-eventos',
  standalone: false,
  templateUrl: './radar-eventos.component.html',
  styleUrl: './radar-eventos.component.css',
})
export class RadarEventosComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) element!: ElementRef;
  ngOnInit(): void {
    Chart.register(...registerables);
    new Chart(this.element.nativeElement, {
      type: 'radar',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
        }
      },
      data: {
        labels: [
          'Velocidade acima do permitido',
          'Distração',
          'Avanço de sinal',
          'Fadiga',
          'Mudança de faixa proibida para a esquerda',
          'Distância não segura',
          'Outras Ocorrências',
          'Mudança de faixa proibida para a direita',
          'Telefone',
        ],
        datasets: [
          {
            data: [39, 20, 9, 9, 6, 2, 2, 1, 1],
            label: 'Ocorrências',
            fill: true,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 5, 
            pointHoverRadius: 7,
          },
        ],
      },
    });
  }
}
