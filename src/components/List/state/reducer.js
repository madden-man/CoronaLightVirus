import actionTypes from './actionTypes';

import './sagas';

const initialState = {
  media: [],
  internet: [],
  weird: [],
  other: [],
};

export default function suggestions(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_SUGGESTIONS:
      const mediaSuggestions = action.payload.suggestions.filter(({ columnId }) => columnId === 'media')
        .map((suggestionResponse) => suggestionResponse.suggestion);
      const internetSuggestions = action.payload.suggestions.filter(({ columnId }) => columnId === 'internet')
        .map((suggestionResponse) => suggestionResponse.suggestion);
      const weirdSuggestions = action.payload.suggestions.filter(({ columnId }) => columnId === 'weird')
        .map((suggestionResponse) => suggestionResponse.suggestion);
      const otherSuggestions = action.payload.suggestions.filter(({ columnId }) => columnId === 'other')
        .map((suggestionResponse) => suggestionResponse.suggestion);

      return {
        ...state,
        media: mediaSuggestions,
        internet: internetSuggestions,
        weird: weirdSuggestions,
        other: otherSuggestions,
      };
    case actionTypes.ADD_SUGGESTION:
      return {
        ...state,
        [action.payload.columnId]: [
          ...state[action.payload.columnId],
          {
            ...action.payload.suggestion,
            votes: 0,
          },
        ],
      };
    default:
      return state;
  }
};
