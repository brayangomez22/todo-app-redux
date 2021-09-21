import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('filter')
      .subscribe((filter) => (this.currentFilter = filter));
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({ filter }));
  }
}
