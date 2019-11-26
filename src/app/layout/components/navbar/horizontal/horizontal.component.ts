import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
  animations: [
    trigger('slideInOut2', [
      state('in', style({
        left: '250px'
      })),
      state('out', style({
        left: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HorizontalComponent implements OnInit {
  state: string = 'in';
  constructor() { }
  openClose = 'open';
  @Output() childOnState = new EventEmitter<string>();
  ngOnInit() {
  }
  hideSidebar(): void {

    this.state = (this.state === 'out' ? 'in' : 'out');
    this.childOnState.emit(this.state);
  }

}
