import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComparisonFeaturesModule } from '../comparison-features/comparison-features.module';
import { ComparisonHeaderModule } from '../comparison-header/comparison-header.module';
import { ComparisonTableComponent } from './comparison-table.component';

@NgModule({
  declarations: [ComparisonTableComponent],
  imports: [CommonModule, ComparisonHeaderModule, ComparisonFeaturesModule],
})
export class ComparisonTableModule {}
