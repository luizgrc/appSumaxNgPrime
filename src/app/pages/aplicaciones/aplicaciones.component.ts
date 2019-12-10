import { Component, OnInit } from '@angular/core';
import { AplicacionService } from '../../services/aplicacion.service';
import { Aplicacion } from '../../model/Aplicacion';

@Component({
  selector: 'aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss']
})
export class AplicacionesComponent implements OnInit {
  items: Aplicacion[];

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit() {
    this.items = this.aplicacionService.getAPlicacionLista();
  }

}
