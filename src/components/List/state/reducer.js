import actionTypes from './actionTypes';

const initialState = {
  media: [],
  internet: [],
  weird: [],
  other: [],
};

export default function suggestions(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_SUGGESTION:
      return {
        ...state,
        [action.payload.columnId]: [
          ...state[action.payload.columnId],
          {
            suggestion: action.payload.suggestion,
            votes: 0,
          },
        ],
      };
    default:
      return state;
  }
};
