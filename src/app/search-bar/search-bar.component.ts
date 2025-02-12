import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchText: string = '';
  
  @Input() placeholder: string = ''

  @Output() searchChange = new EventEmitter<string>(); 

  onSearchChange(): void {
    this.searchChange.emit(this.searchText); 
  }
}
