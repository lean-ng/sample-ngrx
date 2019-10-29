import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, loadFooterLine } from './app.state';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex-1">
      <todo-shell></todo-shell>
    </div>
    <footer class="w-full text-center border-t border-grey p-4 pin-b">
      <p class="font-bold">Project: sample-ngrx</p>
      <p [innerHTML]="footerLine$ | async"></p>
    </footer>
  `,

})
export class AppComponent {

  footerLine$ = this.store.select(s => s.app.footerLine);

  constructor(private store: Store<{app: AppState}>) {
    store.dispatch(loadFooterLine())
  }
}
