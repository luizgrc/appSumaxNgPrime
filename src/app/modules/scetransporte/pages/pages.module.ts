import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages.routing';
import { FormsModule } from '@angular/forms';
import { OrdenModule } from './orden/orden.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
    OrdenModule
  ]
})
export class PagesModule { }
