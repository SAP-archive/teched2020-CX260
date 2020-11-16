import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@spartacus/storefront';
import { ComparisonFeaturesComponent } from './comparison-features.component';

@NgModule({
  declarations: [ComparisonFeaturesComponent],
  imports: [CommonModule, IconModule],
  exports: [ComparisonFeaturesComponent],
})
export class ComparisonFeaturesModule {}
