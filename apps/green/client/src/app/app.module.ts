import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, Route, RouterModule } from '@angular/router';
import { environment } from '@assets';
import * as cf from '@features/classification';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

export const routes: Route[] = [
  {
    path: '',
    children: cf.routes,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

const routerOpts: ExtraOptions = {
  enableTracing: true,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    cf.FeaturesClassificationModule,
    RouterModule.forRoot(routes, routerOpts),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
