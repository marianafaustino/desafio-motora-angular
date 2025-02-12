import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-veiculos',
  standalone: false,
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent implements OnInit {

  displayedColumns: string[] = ['tipo', 'placa', 'status', 'acao'];
  dataSource = new MatTableDataSource<any>();

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.getVeiculo().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Erro ao buscar veículo:', error);
      }
    );
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
