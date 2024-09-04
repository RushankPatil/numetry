import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import './cart.css';

const Cart = () => {
  const { cart, total, handleRemoveFromCart, handleUpdateQuantity } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleUpdateQuantity(product, parseInt(e.target.value))}
              min="1"
            />
            <span>Price: ${product.price}</span>
            <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Cart;