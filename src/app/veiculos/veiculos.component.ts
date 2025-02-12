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
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Erro ao buscar veículos:', error);
      }
    );
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngOnDestroy(): void {
    if (this.novoItemSubscription) {
      this.novoItemSubscription.unsubscribe();
    }
  }
}
