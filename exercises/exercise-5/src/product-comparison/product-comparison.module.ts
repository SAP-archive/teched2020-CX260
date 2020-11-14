import { NgModule } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';
import { provideCmsStructure } from '../utils/cms-structure.util';
import { provideOutlet } from '../utils/utils';
import { ComparisonSelectorComponent } from './comparison-selector/comparison-selector.component';
import { ComparisonSelectorModule } from './comparison-selector/comparison-selector.module';
import { ComparisonTableModule } from './comparison-table/comparison-table.module';

@NgModule({
  imports: [ComparisonSelectorModule, ComparisonTableModule],
  providers: [
    provideOutlet({
      id: 'ProductAddToCartComponent',
      component: ComparisonSelectorComponent,
      position: OutletPosition.AFTER,
    }),

    provideCmsStructure({
      pageTemplate: 'ContentPage1Template',
      pageSlotPosition: 'Section2A',
      componentId: 'ProductComparisonTable',
    }),
  ],
})
export class ProductComparisonModule {}
