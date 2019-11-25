import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    redirectTo: '/pages/orden'
  }
  // {
  //   path: 'pages',
  //   loadChildren: './pages/pages.module#PagesModule'
  // },
  // {
  //   path: '**',
  //   redirectTo: '/pages/orden'
  // }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),

    TableModule,

    ButtonModule,
    InputTextModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
