import { Injectable } from '@angular/core'
import { Product, ProductScope, ProductService } from '@spartacus/core'
import { combineLatest, Observable, of } from 'rxjs'
import { filter, startWith, switchMap } from 'rxjs/operators'
import { ComparisonSelectionService } from './comparison-selection.service'

@Injectable({
  providedIn: 'root',
})
export class ProductComparisonService {
  constructor(
    private selectionService: ComparisonSelectionService,
    private productService: ProductService
  ) {}

  getList(
    scope: ProductScope | ProductScope[] = ProductScope.LIST
  ): Observable<Product[]> {
    return this.selectionService.selection$.pipe(
      switchMap((codes) => {
        return codes.length > 0
          ? combineLatest(codes.map((code) => this.getProduct(code, scope)))
          : of(null)
      }),
      startWith([])
    )
  }

  toggle(code: string): void {
    this.selectionService.toggle(code)
  }

  private getProduct(
    code: string,
    scope: ProductScope | ProductScope[]
  ): Observable<Product> {
    return this.productService.get(code, scope).pipe(filter(Boolean))
  }
}
