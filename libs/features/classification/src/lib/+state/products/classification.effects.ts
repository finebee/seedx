import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ClassificationFeature from './classification.reducer';
import * as ClassificationActions from './classification.actions';

@Injectable()
export class ClassificationEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassificationActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ClassificationActions.loadClassificationSuccess({
            classification: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ClassificationActions.loadClassificationFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
