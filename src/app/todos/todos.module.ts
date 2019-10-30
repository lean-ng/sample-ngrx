import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { todosReducer } from './state/reducers';
import { TodosEffects } from './state/effects';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

@NgModule({
  declarations: [TodoShellComponent, TodoInputComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [TodoShellComponent]
})
export class TodosModule { }
