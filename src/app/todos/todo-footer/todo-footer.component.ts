import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];

  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearTodos());
  }
}
