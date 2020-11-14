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

  readonly selection$ = new BehaviorSubject([]);

  private persistSubscription = this.statePersistenceService.syncWithStorage({
    key: 'comparison-products',
    state$: this.selection$,
    onRead: (state) => {
      this.selection$.next(state ? state : []);
    },
  });

  get(code: string): Observable<SelectionState> {
    return this.selection$.pipe(
      map((state) => ({ code, selected: state.includes(code) }))
    );
  }

  toggle(code: string): void {
    const selection: string[] = this.selection$.value;

    const active = selection.indexOf(code);
    if (active > -1) {
      selection.splice(active, 1);
    } else {
      selection.push(code);
    }
    this.selection$.next(selection);
  }

  ngOnDestroy(): void {
    this.persistSubscription.unsubscribe();
  }
}
