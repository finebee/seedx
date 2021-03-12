import { ClassificationEntity } from './classification.models';
import {
  State,
  classificationAdapter,
  initialState,
} from './classification.reducer';
import * as ClassificationSelectors from './classification.selectors';

describe('Classification Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getClassificationId = (it) => it['id'];
  const createClassificationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ClassificationEntity);

  let state;

  beforeEach(() => {
    state = {
      classification: classificationAdapter.setAll(
        [
          createClassificationEntity('PRODUCT-AAA'),
          createClassificationEntity('PRODUCT-BBB'),
          createClassificationEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Classification Selectors', () => {
    it('getAllClassification() should return the list of Classification', () => {
      const results = ClassificationSelectors.getAllClassification(state);
      const selId = getClassificationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ClassificationSelectors.getSelected(state);
      const selId = getClassificationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getClassificationLoaded() should return the current 'loaded' status", () => {
      const result = ClassificationSelectors.getClassificationLoaded(state);

      expect(result).toBe(true);
    });

    it("getClassificationError() should return the current 'error' state", () => {
      const result = ClassificationSelectors.getClassificationError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
