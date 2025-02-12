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

  private veiculosMap = new Map<number, string>(); 
  private motoristasMap = new Map<number, string>(); 

  private searchFilter: string = ''; 
  private statusFilter: string = ''; 

  statusOptions = [
    { label: 'Finalizada', value: 'finished' },
    { label: 'Em Andamento', value: 'ongoing' }
  ];

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

        this.dataSource = new MatTableDataSource(viagens.map((viagem: any) => ({
          ...viagem,
          veiculo: this.veiculosMap.get(viagem.vehicleId) || '-',
          motorista: this.motoristasMap.get(viagem.driverId) || 'Não identificado' 
        })));

        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const filterObj = JSON.parse(filter);
          const nomeMotorista = data.motorista.toLowerCase();
          const statusViagem = data.status.toLowerCase();

          const matchesSearch = nomeMotorista.includes(filterObj.searchFilter.toLowerCase());
          const matchesStatus = filterObj.statusFilter ? statusViagem.includes(filterObj.statusFilter.toLowerCase()) : true;

          return matchesSearch && matchesStatus;
        };
      },
      (error) => console.error('Erro ao buscar viagens:', error)
    );
  }

  applySearch(filterValue: string): void {
    this.searchFilter = filterValue.trim().toLowerCase();
    this.applyFilters();
  }

  applyStatusFilter(filterValue: string): void {
    this.statusFilter = filterValue;
    this.applyFilters();
  }

  private applyFilters(): void {
    const filterObj = { searchFilter: this.searchFilter, statusFilter: this.statusFilter };
    this.dataSource.filter = JSON.stringify(filterObj);
  }
}
