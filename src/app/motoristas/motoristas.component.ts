import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MotoristasService } from '../motoristas.service';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-motoristas',
  standalone: false,
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['nome', 'status', 'acao']; 
  dataSource = new MatTableDataSource<any>();

  private novoItemSubscription!: Subscription;
  private searchFilter: string = ''; 
  private statusFilter: string = ''; 

  statusOptions = [
    { label: 'Parado', value: 'idle' },
    { label: 'Dirigindo', value: 'driving' }
  ];

  constructor(
    private motoristasService: MotoristasService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.carregarMotoristas();
    this.novoItemSubscription = this.appComponent.novoItemAdicionado.subscribe(() => {
      this.carregarMotoristas();
    });
  }

  private carregarMotoristas(): void {
    this.motoristasService.getMotorista().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const filterObj = JSON.parse(filter);
          const nome = data.name.toLowerCase();
          const cpf = data.cpf?.toLowerCase() || ''; 
          const cnh = data.cnh?.toLowerCase() || ''; 
          const status = data.status.toLowerCase();

          const matchesSearch = nome.includes(filterObj.searchFilter.toLowerCase()) || 
                                cpf.includes(filterObj.searchFilter.toLowerCase()) || 
                                cnh.includes(filterObj.searchFilter.toLowerCase());

          const matchesStatus = filterObj.statusFilter ? status.includes(filterObj.statusFilter.toLowerCase()) : true;

          return matchesSearch && matchesStatus;
        };
      },
      (error) => {
        console.error('Erro ao buscar motoristas:', error);
      }
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

  ngOnDestroy(): void {
    if (this.novoItemSubscription) {
      this.novoItemSubscription.unsubscribe();
    }
  }
}
