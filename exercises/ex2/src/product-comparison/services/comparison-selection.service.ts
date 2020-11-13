import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SelectionState } from "../model";

@Injectable({
  providedIn: "root",
})
export class ComparisonSelectionService {
  get(code: string): Observable<SelectionState> {
    return of({ code, selected: false });
  }

  toggle(code: string): void {}
}
