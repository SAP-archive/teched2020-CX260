import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { ComparisonHeaderModule } from '../comparison-header/comparison-header.module';
import { ComparisonTableComponent } from './comparison-table.component';

@NgModule({
  declarations: [ComparisonTableComponent],
  imports: [CommonModule, ComparisonHeaderModule],
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
