import { ClassificationEntity } from './classification.models';
import * as ClassificationActions from './classification.actions';
import { State, initialState, reducer } from './classification.reducer';

describe('Classification Reducer', () => {
  const createClassificationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ClassificationEntity);

  beforeEach(() => {});

  describe('valid Classification actions', () => {
    it('loadClassificationSuccess should return set the list of known Classification', () => {
      const classification = [
        createClassificationEntity('PRODUCT-AAA'),
        createClassificationEntity('PRODUCT-zzz'),
      ];
      const action = ClassificationActions.loadClassificationSuccess({
        classification,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
