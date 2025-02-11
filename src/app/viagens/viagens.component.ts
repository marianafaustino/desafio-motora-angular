import { Component, OnInit } from '@angular/core';
import { ViagensService } from '../viagens.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viagens',
  standalone: false,
  templateUrl: './viagens.component.html',
  styleUrl: './viagens.component.css'
})
export class ViagensComponent implements OnInit {

  displayedColumns: string[] = ['motorista', 'veículo', 'status', 'acao'];
  dataSource = new MatTableDataSource<any>();

  constructor(private viagensService: ViagensService) { }

  ngOnInit(): void {
    this.viagensService.getViagens().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Erro ao buscar viagens:', error);
      }
    );
  }

}