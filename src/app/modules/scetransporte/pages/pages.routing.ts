import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenComponent } from './orden/orden.component';


const routes: Routes = [
  {
    path: 'orden',
    component: OrdenComponent,
    loadChildren: () => import('./orden/orden.module').then(m => m.OrdenModule)
  },
  {
    path: '',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
