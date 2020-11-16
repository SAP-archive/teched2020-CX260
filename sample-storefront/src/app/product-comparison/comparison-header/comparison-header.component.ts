import { Component } from '@angular/core';
import { ProductScope } from '@spartacus/core';
import { ProductComparisonService } from '../product-comparison.service';

@Component({
  selector: 'app-comparison-header',
  templateUrl: './comparison-header.component.html',
  styleUrls: ['./comparison-header.component.scss'],
})
export class ComparisonHeaderComponent {
  constructor(private comparisonService: ProductComparisonService) {}

  products$ = this.comparisonService.getList([ProductScope.DETAILS]);

  remove(code: string): void {
    this.comparisonService.toggle(code);
  }
}
