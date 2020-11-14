import { Component } from '@angular/core';
import { ProductScope } from '@spartacus/core';
import { ProductComparisonService } from '../services/product-comparison.service';

@Component({
  selector: 'app-comparison-header',
  templateUrl: './comparison-header.component.html',
  styleUrls: ['./comparison-header.component.scss'],
})
export class ComparisonHeaderComponent {
  products$ = this.comparisonService.getList([ProductScope.DETAILS]);

  constructor(private comparisonService: ProductComparisonService) {}

  remove(code: string): void {
    this.comparisonService.toggle(code);
  }
}
