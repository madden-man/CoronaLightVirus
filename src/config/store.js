
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxSagaMiddleware, startSagas } from './rootSaga';

import rootReducer from './rootReducer';

export const store = () => {
  const sagaMiddleware = reduxSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

  startSagas();

  return store;
}

export default store;