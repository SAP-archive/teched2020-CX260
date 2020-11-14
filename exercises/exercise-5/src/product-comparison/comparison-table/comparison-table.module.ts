import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { ComparisonTableComponent } from './comparison-table.component';

@NgModule({
  declarations: [ComparisonTableComponent],
  imports: [CommonModule],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductComparisonTable: {
          component: ComparisonTableComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class ComparisonTableModule {}
