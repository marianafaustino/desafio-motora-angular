import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-linha-penalidade',
  standalone: false,
  templateUrl: './linha-penalidade.component.html',
  styleUrl: './linha-penalidade.component.css',
})
export class LinhaPenalidadeComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) element!: ElementRef;

  ngOnInit(): void {
    Chart.register(...registerables);

    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: Array.from({ length: 29 }, (_, i) => (i + 1).toString()),
        datasets: [
          {
            label: 'Score de penalidades por dia',
            data: [
              2, 5, 4, 7, 3, 2, 0, 3, 2, 6, 3, 6, 8, 5, 2, 2, 0, 19, 2, 0, 8,
              14, 27, 5, 3, 1, 9,
            ],
            borderColor: '#007bff',
            backgroundColor: '#007bff33',
            fill: false,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            align: 'top', 
            anchor: 'end',
            font: {
              size: 12,
            },
            borderRadius: 4,
            padding: 4,
            clip: false, 
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'April',
            },
          },
          y: {
            beginAtZero: true,
            max: 40,
            title: {
              display: true,
              text: 'Score',
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }
}
