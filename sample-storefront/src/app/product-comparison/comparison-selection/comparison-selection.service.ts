import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SelectionState {
  code: string;
  selected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ComparisonSelectionService {
  constructor() {}

  get(code: string): Observable<SelectionState> {
    return of({ code, selected: false });
  }

  toggle(code: string): void {}
}
