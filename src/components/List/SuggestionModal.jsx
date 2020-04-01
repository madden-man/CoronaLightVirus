import React, { useState } from 'react';
import { string } from 'prop-types';
import { funnyPlaceholderById } from './utils';

import './suggestionModal.css';

export const SuggestionModal = ({ id, onClose, onSubmit }) => {
  const [fields, setFields] = useState({ title: '', details: '' });

  return (
    <section className="suggestion-modal__container">
      <form className="suggestion-modal" onSubmit={(e) => e.preventDefault()}>
        <header>New Suggestion</header>
        <p className="suggestion-modal__close" onClick={onClose}>X</p>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={fields.title}
          placeholder={id && funnyPlaceholderById(id)}
          onChange={(e) => setFields({ ...fields, title: e.target.value })}
        />
        <label>Suggestion Details</label>
        <textarea
          onChange={(e) => setFields({ ...fields, details: e.target.value })}
          placeholder="Here's the link/description/proof/time of death"
          value={fields.details}
        />
        <button onClick={() => onSubmit(id, fields)}>Submit</button>
      </form>
    </section>
  );
};

SuggestionModal.propTypes = {
  id: string,
};

export default SuggestionModal;
