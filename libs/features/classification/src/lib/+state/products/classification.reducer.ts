import {createReducer, on, Action} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

import * as ClassificationActions from './classification.actions';
import {ClassificationEntity} from './classification.models';

export const KEY = 'classification';

export interface State extends EntityState<ClassificationEntity> {
  selectedId?: string | number; // which Classification record has been selected
  loaded: boolean; // has the Classification list been loaded
  error?: string | null; // last known error (if any)
}

export interface ClassificationPartialState {
  readonly [KEY]: State;
}

export const classificationAdapter: EntityAdapter<ClassificationEntity> = createEntityAdapter<ClassificationEntity>();

export const initialState: State = classificationAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const classificationReducer = createReducer(
  initialState,
  on(ClassificationActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ClassificationActions.loadClassificationSuccess,
    (state, {classification}) =>
      classificationAdapter.setAll(classification, {...state, loaded: true})
  ),
  on(ClassificationActions.loadClassificationFailure, (state, {error}) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return classificationReducer(state, action);
}
