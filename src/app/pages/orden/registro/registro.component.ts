import { Component, OnInit, ViewEncapsulation, OnDestroy, OnChanges, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy, OnChanges {
  constructor(public render: Renderer2, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const interact = require('interactjs');
    const position = { x: 0, y: 0 }
    interact('.draggable').draggable({
      listeners: {
        start(event) {
          event.target.style.border = '1px solid #262626';
          event.target.style.zIndex = 2;
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`;
        },
        end(event) {
          event.target.style.border = '';
        }
      },
      modifiers: [
        interact.modifiers.restrict({
          restriction: '#content',
          elementRect: { top: 0, right: 0, bottom: 0, left: 0 },
        })
      ]
    });
  }

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
