import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Poem } from '../../../models/poem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PoemListComponent {
  @Input() poems: Poem[] | null = null;
  @Output() poemSelected = new EventEmitter<Poem>();

  onSelect(poem: Poem) {
    this.poemSelected.emit(poem);
  }
}
