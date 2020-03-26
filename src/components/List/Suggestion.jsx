import React from 'react';
import { string, number } from 'prop-types';

export const Suggestion = ({
  suggestion,
  votes,
}) =>
  <div>
    {suggestion} - {votes} votes
  </div>;

Suggestion.propTypes = {
  suggestion: string,
  votes: number,
};

export default Suggestion;
