import { Component, OnInit } from '@angular/core';
import { ViagensService } from '../viagens.service';

@Component({
  selector: 'app-viagens',
  standalone: false,
  templateUrl: './viagens.component.html',
  styleUrl: './viagens.component.css'
})
export class ViagensComponent implements OnInit {

  viagens: any[] = [];

  constructor(private viagensService : ViagensService) { }

  ngOnInit(): void {
    this.viagensService.getViagens().subscribe(
      (data) => {
        this.viagens = data;
      },
      (error) => {
        console.error('Erro ao buscar viagem:', error);
      }
    );
  }
}