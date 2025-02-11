import { Component, OnInit } from '@angular/core';
import { MotoristasService } from '../motoristas.service';

@Component({
  selector: 'app-motoristas',
  standalone: false,
  templateUrl: './motoristas.component.html',
  styleUrl: './motoristas.component.css'
})
export class MotoristasComponent implements OnInit {

  motoristas: any[] = [];

  constructor(private motoristasService: MotoristasService) { }

  ngOnInit(): void {
    this.motoristasService.getMotorista().subscribe(
      (data) => {
        this.motoristas = data;
      },
      (error) => {
        console.error('Erro ao buscar motoristas:', error);
      }
    );
  }
}