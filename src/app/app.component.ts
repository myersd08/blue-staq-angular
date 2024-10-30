import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoemComponent } from './components/poem/poem.component';
import { PoemSearchComponent } from './components/poem-search/poem-search.component';
import { Poem } from '../models/poem';
import { PoetryService } from '../services/poetry.service';
import { PoemListComponent } from './components/poem-list/poem-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PoemComponent,
    PoemSearchComponent,
    PoemListComponent,
    HttpClientModule,
  ],
  providers: [PoetryService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'What Rhymes With Poetry?';
  searchTerm: string = '';
  poems: Poem[] | null = null;
  selectedPoem: Poem | null = null;
  @ViewChild(PoemSearchComponent) searchComponent!: PoemSearchComponent;

  constructor(private poetryService: PoetryService) {}

  onRandomPoem() {
    this.poems = null;
    this.searchComponent?.clearSearch();
    this.poetryService
      .getRandomPoem()
      .subscribe((poem) => (this.selectedPoem = poem));
  }

  onSearch(term: string) {
    this.selectedPoem = null;
    this.poems = null;
    this.poetryService.searchPoems(term).subscribe((poems) => (this.poems = poems));
  }

  onPoemSelected(poem: Poem) {
    this.poems = null;
    this.searchComponent?.clearSearch();
    this.selectedPoem = poem;
  }
}
