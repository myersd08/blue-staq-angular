import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoemListComponent } from './poem-list.component';

describe('PoemListComponent', () => {
  let component: PoemListComponent;
  let fixture: ComponentFixture<PoemListComponent>;

  const testPoems = [
    {
      title: 'First Poem',
      author: 'Author One',
      lines: ['Line 1', 'Line 2'],
      linecount: 2
    },
    {
      title: 'Second Poem',
      author: 'Author Two',
      lines: ['Line 1', 'Line 2', 'Line 3'],
      linecount: 3
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display poems when provided', () => {
    component.poems = testPoems;
    fixture.detectChanges();

    const poemElements = fixture.nativeElement.querySelectorAll('.poem-item');
    expect(poemElements.length).toBe(2);

    expect(poemElements[0].querySelector('h3').textContent).toBe('First Poem');
    expect(poemElements[1].querySelector('h3').textContent).toBe('Second Poem');
  });
}); 