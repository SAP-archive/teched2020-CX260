import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { OutletPosition } from '@spartacus/storefront';
import { provideCmsStructure } from '../utils/cms-structure.util';
import { provideOutlet } from '../utils/outlet-utils';
import { ComparisonSelectionComponent } from './comparison-selection/comparison-selection.component';
import { ComparisonSelectionModule } from './comparison-selection/comparison-selection.module';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { ComparisonTableModule } from './comparison-table/comparison-table.module';

@NgModule({
  imports: [ComparisonSelectionModule, ComparisonTableModule],
  providers: [
    provideOutlet({
      id: 'ProductAddToCartComponent',
      component: ComparisonSelectionComponent,
      position: OutletPosition.AFTER,
    }),
    provideCmsStructure({
      pageTemplate: 'ContentPage1Template',
      pageSlotPosition: 'Section2A',
      componentId: 'ProductComparisonTable',
    }),
    provideConfig({
      cmsComponents: {
        ProductComparisonTable: {
          component: ComparisonTableComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class ProductComparisonModule {}
