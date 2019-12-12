import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';



@NgModule({
  declarations: [VerticalComponent],
  imports: [
    CommonModule,
    ScrollPanelModule,
    PanelMenuModule,
    TabViewModule,
    CodeHighlighterModule

  ],
  exports:
    [
      VerticalComponent
    ]
})
export class VerticalModule { }
