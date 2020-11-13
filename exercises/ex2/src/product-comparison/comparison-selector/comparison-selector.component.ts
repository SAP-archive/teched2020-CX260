import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { switchMap } from 'rxjs/operators';
import { SelectionState } from '../model';
import { ComparisonSelectionService } from '../services/comparison-selection.service';

@Component({
  selector: 'app-comparison-selector',
  templateUrl: './comparison-selector.component.html',
  styleUrls: ['./comparison-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComparisonSelectorComponent {
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
