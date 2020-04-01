import React from 'react';
import { string, number } from 'prop-types';
import likeImg from '../../assets/like.png';

import './suggestion.css';

export const Suggestion = ({
  title,
  details,
  votes,
}) =>
  <div className="suggestion">
    <h3>{title}</h3>
    <div className="suggestion__like-section">
      <span>{votes}</span>
      <img src={likeImg} alt="likes" />
    </div>
    <span>{details}</span>
  </div>;

Suggestion.propTypes = {
  title: string,
  details: string,
  votes: number,
};

export default Suggestion;
