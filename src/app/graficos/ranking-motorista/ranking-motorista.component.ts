import { Component } from '@angular/core';

export interface Person {
  name: string;
  score: number;
  kmTotal: number;
}

@Component({
  selector: 'app-ranking-motorista',
  standalone: false,
  templateUrl: './ranking-motorista.component.html',
  styleUrl: './ranking-motorista.component.css'
})
export class RankingMotoristaComponent {
  people: Person[] = [
    { name: 'Adelido Oliveira Santos', score: 10.0, kmTotal: 1816.84 },
    { name: 'Edgarpereira Rocha', score: 10.0, kmTotal: 131.50 },
    { name: 'Eduardo Barbosa Lima Filho', score: 10.0, kmTotal: 364.67 },
    { name: 'Helington Oliveira Amorim', score: 10.0, kmTotal: 2948.85 },
    { name: 'Jorge Miguel Alves', score: 10.0, kmTotal: 2022.00 },
    { name: 'Vanderlei Cardoso Gonçalvis', score: 10.0, kmTotal: 1414.71 },
    { name: 'Cleunice De Souza Rafael', score: 10.0, kmTotal: 1752.49 },
    { name: 'Victor Ossa Motato', score: 10.0, kmTotal: 3908.57 },
    { name: 'Marcos Antonio Do Carmo', score: 9.9, kmTotal: 1791.70 },
    { name: 'José Geraldo Do Carmo', score: 9.8, kmTotal: 3138.15 },
    { name: 'Gilmar Dias De Oliveira', score: 9.8, kmTotal: 2454.33 },
    { name: 'Ezequiel Barbosa Da Silva', score: 9.8, kmTotal: 4821.54 },
    { name: 'Adenival Rodrigues Pereira', score: 9.8, kmTotal: 1759.41 },
    { name: 'Elomar Ferreira', score: 9.8, kmTotal: 2233.80 },
    { name: 'Renato Ferreira', score: 9.8, kmTotal: 2670.17 },
    { name: 'Jose Carlos Pereira', score: 9.7, kmTotal: 2202.01 },
    { name: 'Ricardo Ferreira Alves', score: 9.6, kmTotal: 2315.27 },
    { name: 'Edson Teixeira Alves', score: 9.5, kmTotal: 4762.40 },
    { name: 'Devson Sávio', score: 9.2, kmTotal: 1718.38 },
    { name: 'Andrea Rodrigues De Souza', score: 9.2, kmTotal: 5716.43 },
    { name: 'Cristiano Pereira Ribeiro', score: 8.9, kmTotal: 1696.60 },
    { name: 'Eneas Lino Da Silva', score: 8.9, kmTotal: 3154.30 },
    { name: 'Paulo Rocha De Araújo', score: 8.5, kmTotal: 204.99 },
    { name: 'Jorge Luiz Lima Junior', score: 7.7, kmTotal: 1039.48 }
  ];
}
