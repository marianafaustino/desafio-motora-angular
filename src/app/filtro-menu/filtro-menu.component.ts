import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-filtro-menu',
  templateUrl: './filtro-menu.component.html',
  styleUrls: ['./filtro-menu.component.css'],
  standalone: false
})
export class FiltroMenuComponent {
  @Input() titulo: string = 'Filtrar'; // ✅ Título do botão
  @Input() opcoes: { label: string; value: string }[] = []; // ✅ Opções do filtro
  @Output() filtroSelecionado = new EventEmitter<string>(); // ✅ Evento para emitir a seleção

  applyFilter(event: MatSelectionListChange) {
    const selectedOption = event.options.find(option => option.selected); 
    if (selectedOption && selectedOption.value !== undefined) {
      this.filtroSelecionado.emit(selectedOption.value); 
    }
  }
}
