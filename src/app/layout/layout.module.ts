import { NgModule } from '@angular/core';
import { HorizontalLayoutModule } from './horizontal-layout/horizontal-layout.module';
import { VerticalLayoutModule } from './vertical-layout/vertical-layout.module';



@NgModule({
  declarations: [],
  imports: [
    VerticalLayoutModule,
    HorizontalLayoutModule
  ],
  exports : [
    VerticalLayoutModule,
    HorizontalLayoutModule
  ]
})
export class LayoutModule { }
