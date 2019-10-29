import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosHttpService } from '../models/todos-http.service';
import { loadState, stateLoaded } from './actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class TodosEffects {

  loadState$ = createEffect(() => this.actions$.pipe(
    ofType(loadState),
    switchMap(() => this.todosHttpSvc.getAll().pipe(
      map(todos => stateLoaded({ todos }))
    ))
  ));

  constructor(private actions$: Actions, private todosHttpSvc: TodosHttpService) {}
}
