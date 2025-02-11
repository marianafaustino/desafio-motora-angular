import { Component, OnInit } from '@angular/core';
import { ViagensService } from '../viagens.service';
import { MatTableDataSource } from '@angular/material/table';
import { VeiculosService } from '../veiculos.service';
import { MotoristasService } from '../motoristas.service';

@Component({
  selector: 'app-viagens',
  standalone: false,
  templateUrl: './viagens.component.html',
  styleUrl: './viagens.component.css'
})
export class ViagensComponent implements OnInit {

  displayedColumns: string[] = ['motorista', 'veiculo', 'status', 'acao'];
  dataSource = new MatTableDataSource<any>();

  private veiculosMap = new Map<number, string>(); // Mapa (idVeiculo → placa)
  private motoristasMap = new Map<number, string>(); // Mapa (idMotorista → nome)

  constructor(
    private viagensService: ViagensService,
    private veiculosService: VeiculosService,
    private motoristasService: MotoristasService
  ) { }

  ngOnInit(): void {
    this.carregarVeiculosEMotoristas();
  }

  private carregarVeiculosEMotoristas(): void {
    this.veiculosService.getVeiculo().subscribe(
      (veiculos) => {
        veiculos.forEach((veiculo: any) => {
          this.veiculosMap.set(veiculo.id, veiculo.plate);
        });

        this.motoristasService.getMotorista().subscribe(
          (motoristas) => {
            motoristas.forEach((motorista: any) => {
              this.motoristasMap.set(motorista.id, motorista.name); 
            });

            this.carregarViagens();
          },
          (error) => console.error('Erro ao buscar motoristas:', error)
        );
      },
      (error) => console.error('Erro ao buscar veículos:', error)
    );
  }

  private carregarViagens(): void {
    this.viagensService.getViagens().subscribe(
      (viagens) => {

        this.dataSource.data = viagens.map((viagem: any) => ({
          ...viagem,
          veiculo: this.veiculosMap.get(viagem.vehicleId) || '-',
          motorista: this.motoristasMap.get(viagem.driverId) || 'Não identificado' 
        }));
      },
      (error) => console.error('Erro ao buscar viagens:', error)
    );
  }
}