import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ContentModule } from '../components/content/content.module';
import { VerticalLayoutComponent } from './vertical-layout.component';
import { SidebarModule } from '../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    /* Components */
    ContentModule,
    NavbarModule,
    SidebarModule,
    /*/. Components */
    CommonModule
  ],
  exports: [
    VerticalLayoutComponent
  ]
})
export class VerticalLayoutModule { }
