import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter foods based on search term', () => {
    component.searchTerm = 'pizza';
    expect(component.filteredFoods().length).toBe(1);
    expect(component.filteredFoods()[0].name).toBe('Pizza');

    component.searchTerm = 'sushi';
    expect(component.filteredFoods().length).toBe(1);
    expect(component.filteredFoods()[0].name).toBe('Sushi');

    component.searchTerm = 'burger';
    expect(component.filteredFoods().length).toBe(0);
  });
});
