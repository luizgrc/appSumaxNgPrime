import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { VerticalModule } from './vertical/vertical.module';



@NgModule({
  declarations:
    [
      SidebarComponent
    ],
  imports:
    [
      VerticalModule
    ],
  exports:
    [
      SidebarComponent
    ]
})
export class SidebarModule { }