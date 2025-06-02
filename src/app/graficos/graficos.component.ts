import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graficos',
  standalone: false,
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent implements OnInit{
  @ViewChild("meuCanvas", {static: true}) element!: ElementRef
  ngOnInit(): void {
    Chart.register(...registerables);
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [
          {
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58],
            label: 'Exemplo',
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      }
    })
  }
}
