import React from 'react';
import './contact.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have a question or comment? We'd love to hear from you!</p>
      </header>
      <section className="contact-form">
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label for="message">Message:</label>
          <textarea id="message" name="message" />
          <br />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;