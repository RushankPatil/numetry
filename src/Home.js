import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import FeaturedProduct from './FeaturedProduct';
import Categories from './Categories';
import CallToAction from './CallToAction';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
    <Navbar />
      <HeroSection />
      <FeaturedProduct />
      <Categories />
      <CallToAction />
    </div>
  );
};

export default Home;