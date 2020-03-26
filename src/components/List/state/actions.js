import actionTypes from './actionTypes';

export const addSuggestion = (columnId, suggestion) => ({
  type: actionTypes.ADD_SUGGESTION,
  payload: {
    columnId,
    suggestion,
  },
});
