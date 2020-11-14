import { Injectable, OnDestroy } from '@angular/core';
import { StatePersistenceService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectionState } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ComparisonSelectionService implements OnDestroy {
  constructor(private statePersistenceService: StatePersistenceService) {}

  readonly selection: BehaviorSubject<string[]> = new BehaviorSubject([]);

  // persist the selection with local storage
  private persist = this.statePersistenceService.syncWithStorage({
    key: 'comparison-products',
    state$: this.selection,
    onRead: (state) => {
      this.selection.next(state ? state : []);
    },
    // TODO: consider using the `context$` for multi-site selections
  });

  get(code: string): Observable<SelectionState> {
    return this.has(code).pipe(map((selected) => ({ code, selected })));
  }

  toggle(code: string): void {
    const selection = new Set(this.selection.value);
    if (selection.has(code)) {
      selection.delete(code);
    } else {
      selection.add(code);
    }

    this.selection.next(Array.from(selection));
  }

  has(code: string): Observable<boolean> {
    return this.selection.pipe(map((selection) => selection.includes(code)));
  }

  // clean up subscriptions to avoid memory leaking
  ngOnDestroy(): void {
    this.persist.unsubscribe();
  }
}
