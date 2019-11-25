import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
class Car {
  vin: string;
  year: number;
  brand: string;
  color: string;

  constructor(vin, year, brand, color) {
    this.vin = vin;
    this.year = year;
    this.brand = brand;
    this.color = color;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  layoutScreen: any;
  player: AnimationPlayer;

  cars: Car[];

  cols: any[];

  constructor(
    private _animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private _document: any) {

  }

  ngOnInit(): void {

    this.layoutScreen = this._document.body.querySelector('#layout-screen');
    if (this.layoutScreen) {
      this.hide();
    }

    this.cars = [
      new Car('asd', 2, 'asdas', 'asdasd'),
      new Car('asd', 2, 'asdas', 'asdasd'),
      new Car('asd', 2, 'asdas', 'asdasd'),
    ];


    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

  }
  hide(): void {
    this.player =
      this._animationBuilder
        .build([
          style({ opacity: '1' }),
          animate('400ms ease', style({
            opacity: '0',
            zIndex: '-10'
          }))
        ]).create(this.layoutScreen);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }
}
