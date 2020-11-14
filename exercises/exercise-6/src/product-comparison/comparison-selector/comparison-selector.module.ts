import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComparisonSelectorComponent } from './comparison-selector.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ComparisonSelectorComponent],
})
export class ComparisonSelectorModule {}
