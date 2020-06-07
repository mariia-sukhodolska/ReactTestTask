import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tvShowsReducer as tvShows } from './tvShows/tvShows.reducer';
import rootSaga from './saga';

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  tvShows
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  combineReducers({
    tvShows
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
