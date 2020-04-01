import createSagaMiddleware from 'redux-saga';

let sagaMiddleware = null;

let sagasToRun = [];

export function reduxSagaMiddleware() {
  sagaMiddleware = createSagaMiddleware();
  return sagaMiddleware;
}

export function startSagas() {
  if (sagasToRun.length > 0) {
    sagasToRun.forEach(saga => sagaMiddleware.run(saga));
  }
  sagasToRun = null;
}

export default function runSagas(...sagas) {
  if (!sagaMiddleware) {
    sagas.forEach(saga => {
      sagasToRun.push(saga)
    });
  } else {
    sagas.forEach((saga) => {
      sagaMiddleware.run(saga);
    });
  }
}
