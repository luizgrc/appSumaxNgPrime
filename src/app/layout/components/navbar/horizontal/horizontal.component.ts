import { Component, OnInit } from '@angular/core';
import { trigger , state , style } from '@angular/animations';

@Component({
  selector: 'horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
  // ,
  // animations : [
  //   trigger('sideMenuAnime' , [
  //     state('close' , style({width: '0px'})),
  //     state('open' , style({width: '200px'}))
  //   ])
  // ]
})
export class HorizontalComponent implements OnInit {

  constructor() { }
  openClose = 'open';
  ngOnInit() {
  }
  hideSidebar(): void {
    // this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    alert('hide');
  }

}
