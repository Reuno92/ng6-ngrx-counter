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
    this.store.dispatch({ type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({ type: 'DECREMENT'});
  }

  reset() {
    this.store.dispatch({ type: 'RESET'});
  }
}
