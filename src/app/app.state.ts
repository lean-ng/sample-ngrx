import { Injectable, Inject, LOCALE_ID } from '@angular/core';

import { createAction, props, createReducer, on, Action } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

// State
//
export interface AppState {
  footerLine: string;
}
const initialState: AppState = {
  footerLine: ''
}

// Actions
//
export const loadFooterLine = createAction(
  '[App] Load footer line'
);
export const footerLineLoaded = createAction(
  '[App] Footer line loaded', props<{ content: string }>()
);

// Reducer
//
const reducer = createReducer(
  initialState,
  on(footerLineLoaded, (state, { content }) => ({ ...state, footerLine: content }))
);
export function appReducer(state: AppState, action: Action) {
  return reducer(state, action);
}

// Github API
interface GithubApiResponse {
  commit: {
    committer: {
      date: string
    },
    message: string
  }
}
const githubApiUrl = 'https://api.github.com/repos/lean-ng/sample-ngrx/commits/master';

// Effects
@Injectable()
export class AppEffects {

  loadFooterLine$ = createEffect(() => this.actions$.pipe(
    ofType(loadFooterLine),
    switchMap(() => this.http.get<GithubApiResponse>(githubApiUrl).pipe(
      map(({ commit }) => footerLineLoaded({
        content: `
          Last commit: <i>${commit.message}</i> at
          ${formatDate(commit.committer.date, 'medium', this.locale)}
        `
      }))
    ))
  ));

  constructor(private actions$: Actions, private http: HttpClient, @Inject(LOCALE_ID) private locale: string) {}
}
