import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AplicacionesComponent } from './pages/aplicaciones/aplicaciones.component';
import { VerticalLayoutComponent } from './layout/vertical-layout/vertical-layout.component';


const appRoutes: Routes = [
  {
    path: 'pages',
    component: VerticalLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    // loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'aplicaciones',
    component : AplicacionesComponent
  },
  {
    path: '**',
    redirectTo: '/login'
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
    AppComponent,
    LoginComponent,
    AplicacionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      }),

    TableModule,

    ButtonModule,
    InputTextModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
