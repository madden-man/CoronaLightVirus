import React from 'react';

export const Container = ({ children, styles }) =>
  <div style={{maxWidth: 750, margin: 'auto', ...styles}}>
    {children}
  </div>;

export default Container;
