import actionTypes from './actionTypes';

export const receiveSuggestions = (suggestions) => ({
  type: actionTypes.RECEIVE_SUGGESTIONS,
  payload: {
    suggestions,
  },
});

export const addSuggestion = (columnId, suggestion) => ({
  type: actionTypes.ADD_SUGGESTION,
  payload: {
    columnId,
    suggestion,
  },
});
