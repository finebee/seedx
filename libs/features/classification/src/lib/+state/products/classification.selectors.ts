import {createFeatureSelector, createSelector} from '@ngrx/store';
import {
  KEY,
  State,
  ClassificationPartialState,
  classificationAdapter,
} from './classification.reducer';

// Lookup the 'Classification' feature state managed by NgRx
export const getClassificationState = createFeatureSelector<ClassificationPartialState,
  State>(KEY);

const {selectAll, selectEntities} = classificationAdapter.getSelectors();

export const getEntities = selectAll;

export const getClassificationLoaded = createSelector(
  getClassificationState,
  (state: State) => state.loaded
);

export const getClassificationError = createSelector(
  getClassificationState,
  (state: State) => state.error
);

export const getAllClassification = createSelector(
  getClassificationState,
  (state: State) => selectAll(state)
);

export const getClassificationEntities = createSelector(
  getClassificationState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getClassificationState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getClassificationEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const Query = {
  getEntities,
  getSelected,
  getSelectedId,
  getAllClassification,
  getClassificationError,
  getClassificationState,
  getClassificationLoaded,
  getClassificationEntities,
}
