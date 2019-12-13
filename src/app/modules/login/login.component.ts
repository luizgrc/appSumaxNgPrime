import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  slide: boolean = false;
  constructor(
    private usuarioService: UsuarioService, private router: Router
  ) { }

  ngOnInit() {
    this.usuarioService.setItem('false');
    this.usuarioService.logeado.emit(this.usuarioService.getItem());
  }
  login() {
    this.usuarioService.setItem('true');
    this.usuarioService.logeado.emit(this.usuarioService.getItem());
    // this.router.navigate(['/pages/orden']);
    this.router.navigate(['/home']);
  }
}
