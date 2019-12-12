import { NgModule } from '@angular/core';
import { HorizontalComponent } from './horizontal.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HorizontalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalComponent
  ]
})
export class HorizontalModule { }

