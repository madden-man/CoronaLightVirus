import React, { useState } from 'react';
import { connect } from 'react-redux';
import { string, object } from 'prop-types';

import { suggestionsSelector } from './state/selectors';
import { addSuggestion } from './state/actions';

import Suggestion from './Suggestion';
import { SuggestionModal } from './SuggestionModal';

export const Column = ({ id, name, suggestions, addSuggestionToState }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{width: '20%', alignItems: 'center', display: 'inline-flex', flexDirection: 'column' }}>
      {isModalOpen && 
        <SuggestionModal
          id={id}
          onClose={() => setModalOpen(false)}
          onSubmit={(id, fields) => { addSuggestionToState(id, fields); setModalOpen(false); }}
        />}
      <h2>{name}</h2>
      <button onClick={() => setModalOpen(true)} style={{width: '50%', padding: '0.75rem', marginBottom: '1rem'}}>Add Suggestion</button>
      {suggestions && suggestions[id].map((suggestion) =>
        <Suggestion {...suggestion} />
      )}
    </div>
  );
};

Column.propTypes = {
  id: string,
  name: string,
  suggestions: object,
};

const mapStateToProps = state => ({
  suggestions: suggestionsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addSuggestionToState: (id, suggestion) => dispatch(addSuggestion(id, suggestion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
