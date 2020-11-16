import { Component } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { switchMap } from 'rxjs/operators';
import {
  ComparisonSelectionService,
  SelectionState,
} from './comparison-selection.service';

@Component({
  selector: 'app-comparison-selection',
  templateUrl: './comparison-selection.component.html',
  styleUrls: ['./comparison-selection.component.scss'],
})
export class ComparisonSelectionComponent {
  constructor(
    private currentProduct: CurrentProductService,
    private comparisonSelection: ComparisonSelectionService
  ) {}

  state$ = this.currentProduct
    .getProduct()
    .pipe(switchMap((product) => this.comparisonSelection.get(product.code)));

  toggle(state: SelectionState): void {
    this.comparisonSelection.toggle(state.code);
  }
}
