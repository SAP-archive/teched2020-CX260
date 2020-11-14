import { NgModule } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';
import { provideOutlet } from '../utils/utils';
import { ComparisonSelectorComponent } from './comparison-selector/comparison-selector.component';
import { ComparisonSelectorModule } from './comparison-selector/comparison-selector.module';

@NgModule({
  imports: [ComparisonSelectorModule],
  providers: [
    provideOutlet({
      id: 'ProductAddToCartComponent',
      component: ComparisonSelectorComponent,
      position: OutletPosition.AFTER,
    }),
  ],
})
export class ProductComparisonModule {}
