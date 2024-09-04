import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to SportsHub</h1>
      <p>Get the best sports equipment for your next adventure</p>
      <Link to="/shop">
      <button>Explore Now</button>
      </Link>
    </div>
  );
};

export default HeroSection;