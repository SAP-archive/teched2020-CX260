import { NgModule } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';
import { provideOutlet } from '../utils/outlet-utils';
import { ComparisonSelectionComponent } from './comparison-selection/comparison-selection.component';
import { ComparisonSelectionModule } from './comparison-selection/comparison-selection.module';

@NgModule({
  imports: [ComparisonSelectionModule],
  providers: [
    provideOutlet({
      id: 'ProductAddToCartComponent',
      component: ComparisonSelectionComponent,
      position: OutletPosition.AFTER,
    }),
  ],
})
export class ProductComparisonModule {}
