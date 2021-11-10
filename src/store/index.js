import { routerMiddleware } from 'connected-react-router';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middleware';
import rootReducer, { browserHistory } from './reducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  routerMiddleware(browserHistory),
];

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

if (module.hot) {
  module.hot.accept('store/reducer', () => {
    store.replaceReducer(rootReducer);
  });
}

sagaMiddleware.run(rootSaga);

export default { store };
