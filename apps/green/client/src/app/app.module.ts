import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, Route, RouterModule } from '@angular/router';
import * as cf from '@features/classification';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
