import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.menu-bar').on('click', (e) => {
      e.preventDefault()
      $('.home-sidebar').toggleClass('toggled')
      $('.main-area').toggleClass('active')
    });
    $('.menu-bar-2').on('click', () => {
      $('.home-sidebar').toggleClass('toggled')
      $('.main-area').toggleClass('active')
    });
  }

}
