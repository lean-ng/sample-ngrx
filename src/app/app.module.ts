import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { appReducer, AppEffects } from './app.state';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),

    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
