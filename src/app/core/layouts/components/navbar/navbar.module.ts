import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { HorizontalModule } from './horizontal/horizontal.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    HorizontalModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
