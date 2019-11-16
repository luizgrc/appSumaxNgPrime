import { NgModule } from '@angular/core';
import { HorizontalLayoutComponent } from './horizontal-layout.component';
import { ContentModule } from '../components/content/content.module';
import { NavbarModule } from '../components/navbar/navbar.module';



@NgModule({
  declarations: [
    HorizontalLayoutComponent
  ],
  imports: [
    ContentModule,
    NavbarModule
  ],
  exports : [
    HorizontalLayoutComponent
  ]
})
export class HorizontalLayoutModule { }
