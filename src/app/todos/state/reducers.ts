import { createReducer } from "@ngrx/store";
import { TodoState, VisibilityFilter } from './state';

const initialState: TodoState = { list: [], visibility: VisibilityFilter.All };

const reducers = createReducer<TodoState>(
  initialState
);

export function todosReducer( state, action) { return reducers(state, action); }
