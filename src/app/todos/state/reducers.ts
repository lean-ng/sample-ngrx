import { createReducer, on } from "@ngrx/store";
import { TodoState, VisibilityFilter } from './state';
import { stateLoaded } from './actions';

const initialState: TodoState = { list: [], visibility: VisibilityFilter.All };

const reducers = createReducer<TodoState>(
  initialState,
  on(stateLoaded, (state, { todos }) => ({ ...state, list: todos }))
);

export function todosReducer( state, action) { return reducers(state, action); }
