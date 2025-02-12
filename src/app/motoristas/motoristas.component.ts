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

  constructor(private motoristasService: MotoristasService) { }

  ngOnInit(): void {
    this.motoristasService.getMotorista().subscribe(
      (data) => {
        this.dataSource.data = data; 
      },
      (error) => {
        console.error('Erro ao buscar motorista:', error);
      }
    );
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
