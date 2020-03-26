import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import roomForActivities from '../assets/room-for-activities.gif';

import './home.css';

export const Home = () =>
  <Container className="home-section" styles={{textAlign: 'center'}}>
    <h1>Welcome to Corona Light Virus.net!</h1>
    <p>
      So, I'd love to make a list of (pointless) things to do when quarantined at home.<br /><br />
      <img src={roomForActivities} alt="room for activities" /><br /><br />
      Any way you could <Link to="/todo">help</Link> me as I sit here at home, disturbingly devoid of activities?
    </p>

  </Container>;

export default Home;
