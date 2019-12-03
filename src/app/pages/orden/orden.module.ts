import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenRoutingModule } from './orden.routing';
import { OrdenComponent } from './orden.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    OrdenComponent,
    RegistroComponent,
    ListaOrdenComponent,
    ReporteComponent
  ],
  imports: [
    OrdenRoutingModule,
    CommonModule,
    FormsModule,
    TableModule,
    DropdownModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,

    // Registro
    CardModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    ScrollPanelModule
  ],
  exports: [
  ],
  entryComponents: [
    RegistroComponent
  ]
})
export class OrdenModule { }
