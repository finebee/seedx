import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route } from '@angular/router';
import { DashboardComponent } from './pages';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromClassification from './+state/products/classification.reducer';
import { ClassificationEffects } from './+state/products/classification.effects';

export const routes: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(
      fromClassification.CLASSIFICATION_FEATURE_KEY,
      fromClassification.reducer
    ),
    EffectsModule.forFeature([ClassificationEffects]),
  ],
})
export class FeaturesClassificationModule {}
