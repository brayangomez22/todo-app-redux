import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);

      case 'pending':
        return todos.filter((todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
