import { Action, createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('Save the world from villains')];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
