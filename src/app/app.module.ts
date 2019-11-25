import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { LayoutModule } from './layout/layout.module';
import { OrdenComponent } from './pages/orden/orden.component';
import { RegistroComponent } from './pages/orden/registro/registro.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    TableModule,

    ButtonModule,
    InputTextModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
