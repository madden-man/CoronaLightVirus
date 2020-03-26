import React from 'react';

import Column from '../components/List/Column';

export const Todo = () =>
  <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <Column id="media" name="Movies/TV Shows" />
    <Column id="internet" name="Internet Things" />
    <Column id="weird" name="Weird Shit" />
    <Column id="other" name="Other" />
  </section>;

export default Todo;