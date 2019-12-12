import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  logeado = new EventEmitter<boolean>();
  constructor() {
  }

  setItem(estado: string) {
    sessionStorage.setItem('logeado', estado);
  }

  getItem(): boolean {
    return JSON.parse(sessionStorage.getItem('logeado'));
  }
}
