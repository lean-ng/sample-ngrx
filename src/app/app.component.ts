import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex-1">
      <todo-shell></todo-shell>
    </div>
    <footer class="w-full text-center border-t border-grey p-4 pin-b">
      {{ footerLine }}
    </footer>
  `,

})
export class AppComponent {
  footerLine = 'Project: sample-ngrx';
}
