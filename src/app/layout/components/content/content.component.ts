import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content',
  template: '<router-outlet *ngIf="true"></router-outlet>',
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
