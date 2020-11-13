import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonSelectorComponent } from './comparison-selector.component';

describe('ComparisonSelectorComponent', () => {
  let component: ComparisonSelectorComponent;
  let fixture: ComponentFixture<ComparisonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
