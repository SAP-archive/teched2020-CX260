import { Component, HostBinding } from '@angular/core';
import { ProductScope } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { ProductComparisonService } from '../product-comparison.service';
import { ComparisonFeaturesService } from './comparison-features.service';
import {
  ComparisonFeatureType,
  ProductComparisonCategory,
  ProductComparisonProperty,
} from './model';

@Component({
  selector: 'app-comparison-features',
  templateUrl: './comparison-features.component.html',
  styleUrls: ['./comparison-features.component.scss'],
})
export class ComparisonFeaturesComponent {
  constructor(
    private comparisonService: ProductComparisonService,
    private comparisonFeaturesService: ComparisonFeaturesService
  ) {}

  products$ = this.comparisonService.getList([ProductScope.ATTRIBUTES]);

  list$ = this.products$.pipe(
    map((products) => this.comparisonFeaturesService.build(products))
  );

  hasBoolValue(property: ProductComparisonProperty, value: string): string {
    if (property.type === ComparisonFeatureType.BOOL && !!value) {
      return value === 'true' ? 'ACTIVE' : 'CLOSE';
    }
  }

  hasComparableProperties(category: ProductComparisonCategory): boolean {
    let equalProps = 0;
    category?.properties?.forEach((element) => {
      if (element.isEqual) {
        equalProps++;
      }
    });
    return equalProps === category?.properties?.length;
  }

  @HostBinding('class.hide-equal')
  set hideEqual(value: boolean) {
    this.comparisonFeaturesService.hideEqual = value;
  }
  get hideEqual(): boolean {
    return this.comparisonFeaturesService.hideEqual;
  }
}
