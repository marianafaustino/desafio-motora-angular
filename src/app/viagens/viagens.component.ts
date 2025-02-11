import { Component, OnInit } from '@angular/core';
import { ViagensService } from '../viagens.service';
import { MatTableDataSource } from '@angular/material/table';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-viagens',
  standalone: false,
  templateUrl: './viagens.component.html',
  styleUrl: './viagens.component.css'
})
export class ViagensComponent implements OnInit {

  displayedColumns: string[] = ['motorista', 'veiculo', 'status', 'acao'];
  dataSource = new MatTableDataSource<any>();

  private veiculosMap = new Map<number, string>(); 

  constructor(
    private viagensService: ViagensService,
    private veiculosService: VeiculosService
  ) { }

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  private carregarVeiculos(): void {

    this.veiculosService.getVeiculo().subscribe(
      (veiculos) => {
        veiculos.forEach((veiculo: any) => {
          this.veiculosMap.set(veiculo.id, veiculo.plate); 
        });

        this.carregarViagens();
      },
      (error) => console.error('Erro ao buscar veículos:', error)
    );
  }

  private carregarViagens(): void {
    this.viagensService.getViagens().subscribe(
      (viagens) => {
        
        this.dataSource.data = viagens.map((viagem: any) => ({
          ...viagem,
          veiculo: this.veiculosMap.get(viagem.veiculoId) || '-' 
        }));
      },
      (error) => console.error('Erro ao buscar viagens:', error)
    );
  }
}