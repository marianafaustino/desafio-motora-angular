import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculos',
  standalone: false,
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent implements OnInit {

  veiculos: any[] = [];

  constructor(private veiculosService : VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.getVeiculo().subscribe(
      (data) => {
        this.veiculos = data;
      },
      (error) => {
        console.error('Erro ao buscar veículo:', error);
      }
    );
  }
}
