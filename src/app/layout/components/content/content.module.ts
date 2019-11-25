import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    RouterModule,
    BreadcrumbModule,
    TableModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
