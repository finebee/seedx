import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fs from './+state';
import * as fp from './pages';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.forFeature([fs.Effects]),
    StoreModule.forFeature(fs.KEY, fs.reducer),
  ],
  exports: [fp.components],
  declarations: [fp.components],
})
export class FeaturesClassificationModule {}
