import { Injectable } from '@angular/core';
import { Aplicacion } from 'app/shared/models/Aplicacion';


@Injectable({
  providedIn: 'root'
})
export class AplicacionService {
  aplicaciones: Aplicacion[] = [
    new Aplicacion(1, 'SceTransporte', 'imagen'),
    new Aplicacion(2, 'SceTransporte', 'imagen'),
    new Aplicacion(3, 'SceTransporte', 'imagen'),
    new Aplicacion(4, 'SceTransporte', 'imagen'),
    new Aplicacion(5, 'SceTransporte', 'imagen'),
    new Aplicacion(6, 'SceTransporte', 'imagen'),
    new Aplicacion(7, 'SceTransporte', 'imagen'),
    new Aplicacion(8, 'SceTransporte', 'imagen'),
    new Aplicacion(9, 'SceTransporte', 'imagen')
  ];
  constructor() { }

  getAPlicacionLista(): Aplicacion[] {
    return this.aplicaciones;
  }
}
