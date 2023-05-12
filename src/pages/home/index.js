import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Talents from './components/talents';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Talents />
    </div>
  );
};

export default Home;
