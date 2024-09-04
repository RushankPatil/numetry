import React from 'react';
import logo from './download.jpg';
import team from './R.jpg';
import mission from './Mission-Statement-2.jpg';
import './about.css'
import values from './R (1).jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <img src={logo} alt="Sports Hub Logo" />
        <h1>About Sports Hub</h1>
      </header>
      <section className="about-intro">
        <h2>Welcome to Sports Hub</h2>
        <p>Sports Hub is your one-stop online shop for all your sports needs. We are a team of sports enthusiasts dedicated to providing high-quality sports equipment and apparel to athletes of all levels.</p>
        <img src={team} alt="Sports Hub Team" />
      </section>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to help you perform at your best and reach your fitness goals. We believe that sports and fitness should be accessible to everyone, and we strive to make that a reality.</p>
        <img src={mission} alt="Sports Hub Mission" style={{ height: '500px' }} />
      </section>
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality: We only sell products that meet our high standards of quality and performance.</li>
          <li>Customer Service: We are committed to providing exceptional customer service and ensuring that our customers are completely satisfied with their purchases.</li>
          <li>Sustainability: We strive to reduce our environmental impact by using eco-friendly packaging and sourcing products from suppliers who share our values.</li>
        </ul>
        <img src={values} alt="Sports Hub Values" />
      </section>
      <section className="about-get-in-touch">
        <h2>Get in Touch</h2>
        <p>Have a question or comment? We'd love to hear from you! Contact us at [info@sportshub.com](mailto:info@sportshub.com) or follow us on social media:</p>
        <ul>
          <li><a href="https://www.facebook.com/sportshub" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/sportshub" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com/sportshub" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;