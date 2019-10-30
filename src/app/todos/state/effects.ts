import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosHttpService } from '../models/todos-http.service';
import { loadState, stateLoaded, createTodo, todoCreated } from './actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class TodosEffects {

  loadState$ = createEffect(() => this.actions$.pipe(
    ofType(loadState),
    switchMap(() => this.todosHttpSvc.getAll().pipe(
      map(todos => stateLoaded({ todos }))
    ))
  ));

  createTodo$ = createEffect(() => this.actions$.pipe(
    ofType(createTodo),
    switchMap(({title}) => this.todosHttpSvc.create(title).pipe(
      map(todo => todoCreated({ todo }))
    ))
  ));

  constructor(private actions$: Actions, private todosHttpSvc: TodosHttpService) {}
}
