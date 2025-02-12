import { Component, OnInit, OnDestroy } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-veiculos',
  standalone: false,
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['tipo', 'placa', 'status', 'acao'];
  dataSource = new MatTableDataSource<any>();

  private novoItemSubscription!: Subscription;

  private searchFilter: string = ''; 
  private statusFilter: string = ''; 

  constructor(
    private veiculosService: VeiculosService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.carregarVeiculos();
    this.novoItemSubscription = this.appComponent.novoItemAdicionado.subscribe(() => {
      this.carregarVeiculos();
    });
  }

  private carregarVeiculos(): void {
    this.veiculosService.getVeiculo().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const filterObj = JSON.parse(filter);
          const placa = data.plate.toLowerCase();
          const status = data.status.toLowerCase();
          const tipo = data.type.toLowerCase();

          const matchesSearch = placa.includes(filterObj.searchFilter.toLowerCase());
          const matchesStatus = filterObj.statusFilter ? status.includes(filterObj.statusFilter.toLowerCase()) : true;

          return matchesSearch && matchesStatus;
        };
      },
      (error) => {
        console.error('Erro ao buscar veículos:', error);
      }
    );
  }

  applySearch(filterValue: string): void {
    this.searchFilter = filterValue.trim().toLowerCase();
    this.applyFilters();
  }

  applyFilter(filterValue: string): void {
    this.statusFilter = filterValue;
    this.applyFilters();
  }

  private applyFilters(): void {
    const filterObj = { searchFilter: this.searchFilter, statusFilter: this.statusFilter };
    this.dataSource.filter = JSON.stringify(filterObj);
  }

  ngOnDestroy(): void {
    if (this.novoItemSubscription) {
      this.novoItemSubscription.unsubscribe();
    }
  }
}
