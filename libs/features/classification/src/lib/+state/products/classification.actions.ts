import { createAction, props } from '@ngrx/store';
import { ClassificationEntity } from './classification.models';

export const init = createAction('[Classification Page] Init');

export const loadClassificationSuccess = createAction(
  '[Classification/API] Load Classification Success',
  props<{ classification: ClassificationEntity[] }>()
);

export const loadClassificationFailure = createAction(
  '[Classification/API] Load Classification Failure',
  props<{ error: any }>()
);
