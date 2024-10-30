import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoemComponent } from './poem.component';

describe('PoemComponent', () => {
  let component: PoemComponent;
  let fixture: ComponentFixture<PoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display poem details when poem is provided', () => {
    const testPoem = {
      title: 'Test Poem',
      author: 'Test Author',
      lines: ['Line 1', 'Line 2', '', 'Line 4'],
      linecount: 4
    };

    component.poem = testPoem;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.poem-title').textContent).toContain('Test Poem');
    expect(compiled.querySelector('.poem-author').textContent).toContain('Test Author');
    
    const poemLines = compiled.querySelectorAll('.poem-line');
    expect(poemLines.length).toBe(4);
    expect(poemLines[0].textContent).toContain('Line 1');
    expect(poemLines[1].textContent).toContain('Line 2');
    expect(poemLines[2].classList.contains('empty-line')).toBeTruthy();
    expect(poemLines[3].textContent).toContain('Line 4');
  });

  it('should not display anything when poem is not provided', () => {
    component.poem = null;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.poem-title')).toBeNull();
    expect(compiled.querySelector('.poem-author')).toBeNull();
    expect(compiled.querySelectorAll('.poem-line').length).toBe(0);
  });
}); 