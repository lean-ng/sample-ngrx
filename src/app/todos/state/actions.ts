import { createAction, props } from "@ngrx/store";
import { Todo } from '../models/todo';

// Async messages (requests)
//
export const loadState = createAction('[Todos] Load state');

export const createTodo = createAction(
  '[Todos] Create Todo',
  props<{ title: string }>()
);
export const updateTodo = createAction(
  '[Todos] Update Todo',
  props<{ id: number, changes: { title?: string, completed?: boolean} }>()
);
export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ id: number }>()
);

// State modifying actions
//
export const stateLoaded = createAction(
  '[Todos] State loaded',
  props<{ todos: Todo[] }>()
);
export const todoCreated = createAction(
  '[Todos] Todo created',
  props<{ todo: Todo }>()
);
export const todoUpdated = createAction(
  '[Todos] Todo updated',
  props<{ todo: Todo }>()
);
export const todoRemoved = createAction(
  '[Todos] Todo removed',
  props<{ todo: Todo }>()
);
export const backendError = createAction(
  '[Todos] Backend error',
  props<{ error: string }>()
);
