import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from '../../state/state';
import { loadState, createTodo } from '../../state/actions';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html'
})
export class TodoShellComponent implements OnInit {

  todos$ = this.store.select(s => s.todos.list);

  constructor(private store: Store<{ todos: TodoState}>) {}

  ngOnInit() {
    this.store.dispatch(loadState());
  }

  onCreateRequest(title: string) {
    this.store.dispatch(createTodo({title}));
  }
}
