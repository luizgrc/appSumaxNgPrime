import { Component, OnInit, ViewEncapsulation, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const interact = require('interactjs');
    const position = { x: 0, y: 0 }
    interact('.draggable').draggable({
      listeners: {
        start(event) {
          // console.log(event.type, event.target);
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`;
        },
      }
    });
  }

  calculateRestriction(x: any, y: any, element: any) {
    console.log(x, y, element);
    return {
      top: 20,
      left: 0,
      right: 0,
      bottom: 10

    };


  }
  getElementRect() {

  }
  // dragMoveListener(event) {
  //   var target = event.target
  //   // keep the dragged position in the data-x/data-y attributes
  //   var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  //   var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  //   // translate the element
  //   target.style.webkitTransform =
  //     target.style.transform =
  //     'translate(' + x + 'px, ' + y + 'px)'

  //   // update the posiion attributes
  //   target.setAttribute('data-x', x)
  //   target.setAttribute('data-y', y)
  // }
  closeViaParent() {
    this.router.navigate(
      [
        {
          outlets: {
            registro: null
          }
        }
      ],
      {
        relativeTo: this.activatedRouter.parent
      }
    );
  }
  ngOnDestroy(): void {
    console.log('Registro Component DestroY!')

  }
  ngOnChanges() {
    console.log('changes');
  }
}
