import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenRoutingModule } from './orden.routing';
import { OrdenComponent } from './orden.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdenComponent,
    RegistroComponent,
    ListaOrdenComponent
  ],
  imports: [
    OrdenRoutingModule,
    CommonModule,
    FormsModule,
    TableModule,
    DropdownModule
  ],
  exports: [
  ]
})
export class OrdenModule { }
