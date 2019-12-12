import { Component, OnInit, Inject, ViewEncapsulation, OnChanges, OnDestroy } from '@angular/core';
import { DOCUMENT, PlatformLocation } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Event as NavigationEvent } from '@angular/router';
import { UsuarioService } from './core/services/usuario.service';
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
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  layoutScreen: any;
  player: AnimationPlayer;
  logeadoSuscription: Subscription;
  cars: Car[];

  cols: any[];
  usuariologeado: boolean = false;
  constructor(
    private _animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private _document: any,
    private usuarioService: UsuarioService,
    router: Router) {

    router.events
      .pipe(
        filter(
          (event: NavigationEvent) => {

            return (event instanceof NavigationStart);

          }
        )
      ).subscribe((event: NavigationStart) => {
        console.group('NavigationStart Event');
        console.log('navigation id:', event.id);
        console.log('route:', event.url);
        if (event.url === '/login' && event.navigationTrigger === 'popstate') {
          // this.usuarioService.setItem('false');
          // this.usuarioService.logeado.emit(this.usuarioService.getItem());
          this.usuariologeado = false;
        }
        console.log('trigger:', event.navigationTrigger);

        if (event.restoredState) {

          console.warn(
            'restoring navigation id:',
            event.restoredState.navigationId
          );

        }

        console.groupEnd();
      });
  }

  ngOnInit(): void {
    this.usuariologeado = this.usuarioService.getItem();
    this.logeadoSuscription = this.usuarioService.logeado.subscribe(estado => {
      this.usuariologeado = estado;
    });
    this.layoutScreen = this._document.body.querySelector('#layout-screen');
    if (this.layoutScreen) {
      this.hide();
    }

  }
  ngOnDestroy() {
    this.logeadoSuscription.unsubscribe();
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
