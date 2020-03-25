import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

import './home.css';

export const Home = () =>
  <Container className="home-section">
    <h1>Welcome to Corona Light Virus.net!</h1>
    <p>Here, you will find a whole lot of (pointless) things to do when quarantined at home, and (hopefully) a funny joke or two. Such things may include..</p>
    <ul>
      <li>Eating</li>
      <li>Sleeping</li>
      <li>..i'm not very good at this</li>
    </ul>

    <p>So please! Give me some <Link to="/todo">help</Link> thinking of things to do!</p>
  </Container>;

export default Home;
