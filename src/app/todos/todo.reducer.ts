import { Action, createReducer, on } from '@ngrx/store';
import {
  create,
  toggle,
  edit,
  deleteTodo,
  toggleAll,
  clearTodos,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save the world from villains 1'),
  new Todo('Save the world from villains 2'),
  new Todo('Save the world from villains 3'),
  new Todo('Save the world from villains 4'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completed }) =>
    state.map((todo) => {
      return {
        ...todo,
        completed: completed,
      };
    })
  ),
  on(clearTodos, (state) => state.filter((todo) => !todo.completed))
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
