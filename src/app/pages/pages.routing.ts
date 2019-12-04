import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenComponent } from './orden/orden.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: 'orden',
    component: OrdenComponent,
    loadChildren: () => import('./orden/orden.module').then(m => m.OrdenModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
