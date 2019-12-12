import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { TableModule } from 'primeng/table';
// import { ButtonModule } from 'primeng/button';
// import { InputTextModule } from 'primeng/inputtext';
// import { LayoutModule } from './core/layout/layout.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { VerticalLayoutComponent } from '@layouts/vertical-layout/vertical-layout.component';
import { LayoutsModule } from '@layouts/layouts.module';
import { TestComponent } from './modules/test/test.component';




const appRoutes: Routes = [
  {
    path: 'scetransporte',
    component: VerticalLayoutComponent,
    loadChildren: () => import('./modules/scetransporte/pages/pages.module').then(m => m.PagesModule)
    // loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
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
    TestComponent
  ],
  imports: [
    /* */
    LoginModule,
    HomeModule,
    LayoutsModule,

    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      }),

    // TableModule,

    // ButtonModule,
    // InputTextModule,
    // LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
