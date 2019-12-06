import { Component, OnInit, OnChanges } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
// import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  slide: boolean = false;
  constructor(
    private usuarioService: UsuarioService, private router: Router
    // location: PlatformLocation
  ) {
    // location.onPopState(( event) => {
    //   console.log(event);
    //   this.usuarioService.logeado.emit(false);
    //   console.log('PRESIONASTES BACK LOGIN');

    // });
  }

  ngOnInit() {
    this.usuarioService.setItem('false');
  }
  login() {
    this.usuarioService.setItem('true')
    this.usuarioService.logeado.emit(this.usuarioService.getItem());
    this.router.navigate(['/pages/orden']);
  }

}
