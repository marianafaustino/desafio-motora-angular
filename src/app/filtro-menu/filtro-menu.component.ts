import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-menu',
  standalone: false,
  templateUrl: './filtro-menu.component.html',
  styleUrl: './filtro-menu.component.css'
})
export class FiltroMenuComponent {
  @Output() filterChange = new EventEmitter<string>();

  filterOptions = [
    { label: 'Parado', value: 'idle' },
    { label: 'Dirigindo', value: 'driving' },
    { label: 'Finalizada', value: 'finished' },
    { label: 'Em andamento', value: 'ongoing' },
    { label: 'Em movimento', value: 'moving'}
  ];

  applyFilter(event: any) {
    const selectedOption = event.options.find((o: any) => o.selected);
    this.filterChange.emit(selectedOption ? selectedOption.value : '');
  }
}
