import { takeEvery } from 'redux-saga/effects';

import socketIOClient from 'socket.io-client';

import actionTypes from './actionTypes';
import runSagas from '../../../config/rootSaga';

export function storeSuggestionInMongo(action) {
  const socket = socketIOClient('http://localhost:8080');

  socket.emit('new_suggestion', action.payload);
}

/*
export function* sessionStoreUserInfo(userInfo) {
  const currentInfo = window.sessionStorage.getItem('userinfo');

  if (!currentInfo || JSON.parse(currentInfo).username !== userInfo.username) {
    window.sessionStorage.setItem('userinfo', JSON.stringify(userInfo));
  }
};

export function* removeSessionInfo() {
  if (window.sessionStorage.getItem('userinfo')) {
    window.sessionStorage.removeItem('userinfo');
  }
}
*/

export function* watchSuggestionAdded() {
  yield takeEvery(actionTypes.ADD_SUGGESTION, storeSuggestionInMongo);
};

runSagas(
  watchSuggestionAdded,
);
