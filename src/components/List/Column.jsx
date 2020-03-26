import React, { useState } from 'react';
import { connect } from 'react-redux';
import { string, array } from 'prop-types';

import { suggestionsSelector } from './state/selectors';
import { addSuggestion } from './state/actions';

import Suggestion from './Suggestion';

export const Column = ({ id, name, suggestions, addSuggestionToState }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{width: '20%', alignItems: 'center', display: 'inline-flex', flexDirection: 'column' }}>
      <h2>{name}</h2>
      <button onClick={() => setModalOpen(true)} style={{width: '50%', padding: '0.75rem'}}>Add Suggestion</button>
      {suggestions && suggestions[id].map((suggestion) =>
        <Suggestion {...suggestion} />
      )}
    </div>
  );
};

Column.propTypes = {
  id: string,
  name: string,
  suggestions: array,
};

const mapStateToProps = state => ({
  suggestions: suggestionsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addSuggestionToState: (id, suggestion) => dispatch(addSuggestion(id, suggestion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
