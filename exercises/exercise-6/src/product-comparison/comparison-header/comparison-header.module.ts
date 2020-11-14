import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { ComparisonHeaderComponent } from './comparison-header.component';

@NgModule({
  declarations: [ComparisonHeaderComponent],
  imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
  exports: [ComparisonHeaderComponent],
})
export class ComparisonHeaderModule {}
