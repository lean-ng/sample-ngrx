import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from '../../state/state';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html'
})
export class TodoShellComponent implements OnInit {

  todos$ = this.store.select(s => s.todos.list);

  constructor(private store: Store<{ todos: TodoState}>) { }

  ngOnInit() {
  }

}
