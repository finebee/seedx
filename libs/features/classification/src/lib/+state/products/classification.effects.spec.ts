import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ClassificationEffects } from './classification.effects';
import * as ClassificationActions from './classification.actions';

describe('ClassificationEffects', () => {
  let actions: Observable<any>;
  let effects: ClassificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ClassificationEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ClassificationEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ClassificationActions.init() });

      const expected = hot('-a-|', {
        a: ClassificationActions.loadClassificationSuccess({
          classification: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
