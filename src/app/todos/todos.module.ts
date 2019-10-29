import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './state/reducers';



@NgModule({
  declarations: [TodoShellComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', todosReducer)
  ],
  exports: [TodoShellComponent]
})
export class TodosModule { }
