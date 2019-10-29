import { Todo } from '../models/todo';

export enum VisibilityFilter { All, Active, Completed };

export interface TodoState {
  list: Todo[],
  visibility: VisibilityFilter
}
