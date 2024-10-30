import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PoemSearchComponent } from './poem-search.component';

describe('PoemSearchComponent', () => {
  let component: PoemSearchComponent;
  let fixture: ComponentFixture<PoemSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PoemSearchComponent,
        FormsModule  // Required for ngModel
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update searchTerm when input changes', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test search';
    input.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();
    expect(component.searchTerm).toBe('test search');
  });

  it('should call onSearch when search button is clicked', () => {
    const spy = spyOn(component, 'onSearch');
    const button = fixture.nativeElement.querySelector('.search-button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should call onRandomPoem when random poem button is clicked', () => {
    const spy = spyOn(component, 'onRandomPoem');
    const button = fixture.nativeElement.querySelector('.random-button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
}); 