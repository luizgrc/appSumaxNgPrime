import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  slide: boolean = false;
  constructor(private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit() {
  }
  login(){
    this.usuarioService.logeado.emit(true);
    this.router.navigate(['/pages/orden']);
  }
}
