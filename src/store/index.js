import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import rootSage from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSage);

export default store;
