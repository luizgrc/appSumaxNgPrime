import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  template: '<horizontal (childOnState)="EventOnState($event)"></horizontal>'
})
export class NavbarComponent implements OnInit {
  @Output() onState = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  EventOnState(event: any) {
    this.onState.emit(event);
  }
}
