import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ContentModule } from '../components/content/content.module';
import { VerticalLayoutComponent } from './vertical-layout.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview'
import { CodeHighlighterModule } from 'primeng/codehighlighter';

@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    ContentModule,
    NavbarModule,
    CommonModule,
    ScrollPanelModule,
    PanelMenuModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  exports: [
    VerticalLayoutComponent
  ]
})
export class VerticalLayoutModule { }
