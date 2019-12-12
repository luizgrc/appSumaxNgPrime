import { Component, OnInit } from '@angular/core';
import { AplicacionService } from 'app/core/services/aplicacion.service';
import { Aplicacion } from 'app/shared/models/Aplicacion';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Aplicacion[];
  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit() {
    this.items = this.aplicacionService.getAPlicacionLista();
  }

}
