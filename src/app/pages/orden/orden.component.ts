import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdenComponent implements OnInit {

  constructor(
    // private router: Router, public location: Location
    ) { }

  ngOnInit() {

  }
  // refresh() {
  //   this.router.navigateByUrl('/registro', { skipLocationChange: true }).then(() => {
  //     console.log(decodeURI(this.location.path()));
  //     this.router.navigate([decodeURI(this.location.path())]);
  //   });

  // }
}
