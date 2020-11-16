import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ComparisonSelectionComponent } from './comparison-selection.component'

describe('ComparisonSelectionComponent', () => {
  let component: ComparisonSelectionComponent
  let fixture: ComponentFixture<ComparisonSelectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparisonSelectionComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonSelectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
