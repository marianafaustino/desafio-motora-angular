import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { NovoItemDialogComponent } from './novo-item-dialog/novo-item-dialog.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Driver Analytics';
  novoItemAdicionado = new Subject<void>();
  exibirBotoes = false;

  constructor(private dialog: MatDialog, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const rotasPermitidas = ['/viagens', '/motoristas', '/veiculos'];
        this.exibirBotoes = rotasPermitidas.includes(this.router.url); 
      }
    });
  }

  openDialog(): void {
    let title = '';
    let entity = '';

    if (this.router.url === '/motoristas') {
      title = 'Novo Motorista';
      entity = 'motorista';
    } else if (this.router.url === '/viagens') {
      title = 'Nova Viagem';
      entity = 'viagem';
    } else if (this.router.url === '/veiculos') {
      title = 'Novo Veículo';
      entity = 'veículo';
    }

    const dialogRef = this.dialog.open(NovoItemDialogComponent, {
      width: '400px',
      data: { title, entity }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.novoItemAdicionado.next();
      }
    });
  }
}