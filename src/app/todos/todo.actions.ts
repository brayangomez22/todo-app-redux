import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completed: boolean }>()
);

export const clearTodos = createAction('[TODO] clearCompleted Todo');
