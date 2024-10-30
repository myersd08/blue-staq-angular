import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoetryService } from '../../../services/poetry.service';

@Component({
  selector: 'app-poem-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poem-search.component.html',
  styleUrls: ['./poem-search.component.scss']
})
export class PoemSearchComponent {
  searchTerm: string = '';
  @Output() search = new EventEmitter<string>();
  @Output() randomPoem = new EventEmitter<void>();

  constructor() {}

  onSearch() {
    this.search.emit(this.searchTerm);
  }

  onRandomPoem() {
    this.randomPoem.emit();
  }

  clearSearch() {
    this.searchTerm = '';
  }
} 