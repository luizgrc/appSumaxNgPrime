import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ContentModule } from '../components/content/content.module';
import { VerticalLayoutComponent } from './vertical-layout.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';



@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    ContentModule,
    NavbarModule,
    CommonModule,
    ScrollPanelModule
  ],
  exports: [
    VerticalLayoutComponent
  ]
})
export class VerticalLayoutModule { }
