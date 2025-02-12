import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MotoristasService } from '../motoristas.service';

@Component({
  selector: 'app-motoristas',
  standalone: false,
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'status', 'acao']; 
  dataSource = new MatTableDataSource<any>(); 

  private searchFilter: string = ''; 
  private statusFilter: string = ''; 

  constructor(private motoristasService: MotoristasService) { }

  ngOnInit(): void {
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
        console.error('Erro ao buscar motorista:', error);
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
}
