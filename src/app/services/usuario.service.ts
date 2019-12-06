import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  logeado = new EventEmitter<boolean>();
  constructor() {
    
  }
}
