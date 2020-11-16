import { NgModule } from '@angular/core'
import { OutletPosition } from '@spartacus/storefront'
import { provideCmsStructure } from '../utils/cms-structure.util'
import { provideOutlet } from '../utils/utils'
import { ComparisonSelectionComponent } from './comparison-selection/comparison-selection.component'
import { ComparisonSelectionModule } from './comparison-selection/comparison-selection.module'
import { ComparisonTableModule } from './comparison-table/comparison-table.module'

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
  ],
})
export class ProductComparisonModule {}
