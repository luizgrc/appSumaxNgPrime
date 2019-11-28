import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-orden'
  },
  {
    path: 'lista-orden',
    component: ListaOrdenComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenRoutingModule { }
