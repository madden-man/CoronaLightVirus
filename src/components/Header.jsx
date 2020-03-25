import React from 'react';
import { Link } from 'react-router-dom';

import Container from './Container';
import logo from '../assets/coronalightvirus-colored.png';

import './header.css';

export const Header = () =>
  <section className="header">
    <Container styles={{
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <Link to="/"><img src={logo} alt="corona virus (lite)" /></Link>
      <div style={{marginBottom: '2rem'}}>
        <Link to="/todo">Stuff To Do</Link>
      </div>
    </Container>
  </section>;

export default Header;