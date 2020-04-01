import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import { receiveSuggestions } from '../components/List/state/actions';
import Column from '../components/List/Column';

export const Todo = ({ getSuggestions }) => {
  useEffect(() => {
    const socket = socketIOClient('http://192.168.20.205:8080');

    socket.emit('initial_data', {}, (suggestions) => getSuggestions(suggestions));
  }, [getSuggestions]);

  return (
    <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <Column id="media" name="Movies/TV Shows" />
      <Column id="internet" name="Internet Things" />
      <Column id="weird" name="Weird Shit" />
      <Column id="other" name="Other" />
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  getSuggestions: (suggestions) => dispatch(receiveSuggestions(suggestions)),
});

export default connect(null, mapDispatchToProps)(Todo);
