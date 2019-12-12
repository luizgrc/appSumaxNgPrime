import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages.routing';
import { FormsModule } from '@angular/forms';
import { OrdenModule } from './orden/orden.module';


@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    FormsModule,
    OrdenModule
  ]
})
export class PagesModule { }
