import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(private dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    let title = '';
    let entity = '';

    if (this.router.url.includes('/motoristas')) {
      title = 'Novo Motorista';
      entity = 'motorista';
    } else if (this.router.url.includes('/viagens')) {
      title = 'Nova Viagem';
      entity = 'viagem';
    } else if (this.router.url.includes('/veiculos')) {
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
