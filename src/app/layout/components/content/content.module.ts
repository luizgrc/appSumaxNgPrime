import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
