import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    RouterModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
