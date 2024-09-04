import React from 'react';
import Home from './Home';
import AboutPage from './AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Shop from './Shop';
import Cart from './Cart';
import { CartProvider } from './cartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;