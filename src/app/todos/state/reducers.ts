import { createReducer, on } from "@ngrx/store";
import { TodoState, VisibilityFilter } from './state';
import { stateLoaded, todoCreated } from './actions';

const initialState: TodoState = { list: [], visibility: VisibilityFilter.All };

const reducers = createReducer<TodoState>(
  initialState,
  on(stateLoaded, (state, { todos }) => ({ ...state, list: todos })),
  on(todoCreated, (state, { todo }) => ({...state, list: [...state.list, todo]}))
);

export function todosReducer( state, action) { return reducers(state, action); }
