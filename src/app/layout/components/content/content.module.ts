import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
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
