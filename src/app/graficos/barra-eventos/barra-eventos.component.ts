import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-barra-eventos',
  templateUrl: './barra-eventos.component.html',
  standalone: false,
  styleUrls: ['./barra-eventos.component.css']
})
export class BarraEventosComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) element!: ElementRef;

  ngOnInit(): void {
    Chart.register(...registerables);

    new Chart(this.element.nativeElement, {
      type: 'bar',
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
          'Telefone'
        ],
        datasets: [{
          label: 'Ocorrências',
          data: [39, 20, 9, 9, 6, 2, 2, 1, 1],
          backgroundColor: '#d62828',
          borderRadius: 4,
          barThickness: 20
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 40,
            ticks: {
              stepSize: 10
            }
          },
          y: {
            ticks: {
              autoSkip: false,
              font: {
                size: 12
              }
            }
          }
        }
      },
    });
  }
}