import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultContentComponent } from './components/default-content/default-content.component';

@NgModule({
  declarations: [AppComponent
    ,HomeComponent
    ,MainLayoutComponent
    ,DefaultContentComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      APP_ROUTES
      // not needed if loading dynamically
      // [
      //   {
      //     path: 'mfe-app1',
      //     loadChildren: () =>
      //       import('mfe-app1/Module').then((m) => m.RemoteEntryModule),
      //   },
      //   {
      //     path: 'mfe-app2',
      //     loadChildren: () =>
      //       import('mfe-app2/Module').then((m) => m.RemoteEntryModule),
      //   },
      //   {
      //     path: 'mfe-app3',
      //     loadChildren: () =>
      //       import('mfe-app3/Module').then((m) => m.RemoteEntryModule),
      //   },
      // ],
      // { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
