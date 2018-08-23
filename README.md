# Ng6NgRx6Counterx

*My First app with NgRx with Angular 6*

I create a reducer named **counter** for manage state with NgRx and a interface **CounterState** for manage a RxJS Observable.

**Counter.ts**
```
import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}
```

**counterState.ts**
```
export interface CounterState {
    counter: number;
}
```

It's store a logic and dispatch in **CounterComponent**'s methods.

```
import { Component, OnInit } from '@angular/core';

import { CounterState } from '../_models/counterState';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../_reducer/counter';
import { Observable } from 'rxjs';

@Component({
  selector: 'mtr-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private counter$: Observable<number>;
  public displayCounter: number;

  constructor(private store: Store<CounterState>) {
    this.counter$ = store.select('counter');
  }

  ngOnInit() {
    this.counter$.subscribe( data => this.displayCounter = data);
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
```

# Start
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
