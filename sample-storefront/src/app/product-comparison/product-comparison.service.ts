import { Injectable } from '@angular/core';
import { Product, ProductScope, ProductService } from '@spartacus/core';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, startWith, switchMap } from 'rxjs/operators';
import { ComparisonSelectionService } from './comparison-selection/comparison-selection.service';

@Injectable({
  providedIn: 'root',
})
export class ProductComparisonService {
  constructor(
    private selectionService: ComparisonSelectionService,
    private productService: ProductService
  ) {}

  /**
   * Returns an observable with an array of products. The required product
   * data might differ and can be passed in through the `scope` argument, see
   * https://sap.github.io/spartacus-docs/loading-scopes/ for more information.
   */
  getList(
    scope: ProductScope | ProductScope[] = ProductScope.LIST
  ): Observable<Product[]> {
    return this.selectionService.selection$.pipe(
      switchMap((codes) => {
        return codes.length > 0
          ? combineLatest(codes.map((code) => this.getProduct(code, scope)))
          : // if there are no products selected, return falsy, so we can show
            // "empty selection"
            of(null);
      }),
      // return a skeleton by default, to prevent "empty selection" as well
      // as provide an ability to introduce ghost design.
      startWith([{}, {}])
    );
  }

  /**
   * Toggles the selection for the given (product) code.
   */
  toggle(code: string): void {
    this.selectionService.toggle(code);
  }

  /**
   * Resolves the product from the product service.
   */
  private getProduct(
    code: string,
    scope: ProductScope | ProductScope[]
  ): Observable<Product> {
    return this.productService.get(code, scope).pipe(filter(Boolean));
  }
}
