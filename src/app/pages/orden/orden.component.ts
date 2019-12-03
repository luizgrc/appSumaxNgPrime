import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { element } from 'protractor';




@Component({
  selector: 'orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdenComponent implements OnInit, OnDestroy {
  showComponent = true;
  mySubscription: any;
  constructor(
    private router: Router, public location: Location
  ) { }

  ngOnInit() {

  }
  public refresh(e: any) {
    console.log(e);  
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.mySubscription = this.router.events.subscribe((event) => {

      // console.log(event);
      if (event instanceof NavigationEnd) {
        // console.log(event);
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
    // this.showComponent = false;
    // setTimeout(x => this.showComponent = true);
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  // refresh() {
  //   this.router.navigateByUrl('/registro', { skipLocationChange: true }).then(() => {
  //     console.log(decodeURI(this.location.path()));
  //     this.router.navigate([decodeURI(this.location.path())]);
  //   });

  // }
}
