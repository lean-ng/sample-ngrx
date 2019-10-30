import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent implements OnInit {

  @Output()
  createRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  create(title: string) {
    if( title.trim().length > 0) {
      this.createRequest.emit(title.trim());
    }
  }
}
