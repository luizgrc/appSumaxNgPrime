import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';
import { RegistroComponent } from './registro/registro.component';
import { ReporteComponent } from './reporte/reporte.component';



const routes: Routes = [
  {
    path: 'lista-orden',
    component: ListaOrdenComponent
  },
  {
    outlet: 'registro',
    path: 'open',
    component: RegistroComponent
  },
  {
    outlet: 'reporte',
    path: 'open',
    component: ReporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenRoutingModule { }
