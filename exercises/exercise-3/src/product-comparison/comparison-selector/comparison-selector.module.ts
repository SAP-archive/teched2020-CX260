import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComparisonSelectorComponent } from './comparison-selector.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ComparisonSelectorComponent],
})
export class ComparisonSelectorModule {}
