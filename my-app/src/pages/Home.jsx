import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import './Home.css';
import Team from '../components/Team';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Team/>
      <Mission />
    </main>
  );
};

export default Home; 