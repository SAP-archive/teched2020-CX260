# Exercise 3 - Implement Persistent Selection State

In this exercise, you will implement the selection service. We've generated the `ComparisonSelectionService` in the previous example, but we need to implement the logic.

This exercise doesn't introduce any Spartacus specific concepts, if you like to move faster, you can copy the [implementation](https://github.com/SAP-samples/teched2020-CX260/blob/exercises/3-comparison-selection-service/sample-storefront/src/app/product-comparison/comparison-selection/comparison-selection.service.ts) and move to the next [exercises](../exercise-4/README.md).

## Exercise 3.1 Toggle selection

We'll start implementing the selection state in the service. The selection state represents the in memory state of the product comparison selection that remains persistent in memory as long as the user is in the storefront. When the user leaves the storefront, the selection will no longer remain. We persist it in the next exercise.

There are different ways to persist the state, we use a local _BehaviorSubject_ to store the selection. The _BehaviorSubject_ can be used to _observe_ the changes in the UI component.

```ts
readonly selection$ = new BehaviorSubject([]);
```

Next, we're implementing the toggle method that we created in exercise 2.1, using the following logic:

- if the product is already selected, it will be removed from the selection (`Array.splice`)
- if the product is not yet selected, it will be pushed to the selection (`Array.push`)

We need to operate on the reactive stream value. The `BehaviorSubject` provides a convenient method to retrieve the current value.

```ts
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
```

Now that we have a selection, we can expose the selected state for a given product:

```ts
get(code: string): Observable<SelectionState> {
    return this.selection$.pipe(
      map((state) => ({ code, selected: state.includes(code) }))
    );
}
```

You should be able to validate the selection in the application by opening the product detail page for a random product and select the "compare" checkbox. When you navigate away to another page, and come back later, the selection should be persisted from memory.

## Exercise 3.2 Persist selection

We will persist the selection in this exercise, so that you'll be able to resolve the selection in future sessions. This is not only a nice feature for end users, but also very useful during development, as you don't need to recreate the selection each time.

Please note that we persist the selection in this exercise in local storage without asking for consent. This might conflict with local regulations (i.e. GDPR).

Spartacus offers an utility service that you can use to synchronize state to persistent storage , such as `localStorage` and `sessionStorage`. There are some nice features available to persist the state cross different sites (multi-site), but in this exercise we focus on the bare minimum persistence.

The `StatePersistenceService` synchronizes an observable. The utility creates an subscription which we must manage in our code. You can inject the `StatePersistenceService` from the dependency system by adding it to the constructor and resolve a subscription from the `syncWithStorage` method:

```ts
private persistSubscription = this.statePersistenceService.syncWithStorage({
    key: 'comparison-products',
    state$: this.selection$,
    onRead: (state) => {
      this.selection$.next(state ? state : []);
    }
});
```

The `onRead` method will set the _next_ value of the `selection$` subject.

It is important to clean up subscriptions when the service is destroyed, otherwise you introduce a memory leak. You can do this by implementing the `OnDestroy`:

```ts
export class ComparisonSelectionService implements OnDestroy {
  ngOnDestroy(): void {
    this.persistSubscription.unsubscribe();
  }
}
```

You can validate your solution by looking at the local storage in your devtools. You should see a key in localStorage `spartacus⚿⚿comparison-products` that holds the selection of product codes.

## Summary

You've now implemented the persisted state for the selection service. We're now ready to add the comparison page that we'll link up to the product detail page.

If you like to validate your implementation, you can find the [actual implementation of the selection service](https://github.com/SAP-samples/teched2020-CX260/blob/exercises/3-comparison-selection-service/sample-storefront/src/app/product-comparison/comparison-selection/comparison-selection.service.ts).

💡 If you haven't done already, it's a good time again to commit your changes.

---

Continue to [Exercise 4 - Comparison Page ](../exercise-4/README.md)
