import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poem } from '../../../models/poem';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss']
})
export class PoemComponent {
  @Input() poem: Poem | null = null;
  error: string | null = null;

  constructor() {}
} 