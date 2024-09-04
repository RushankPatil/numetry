import React from 'react';
import { Link } from 'react-router-dom';
import adi from './OIP (1).jpg';
import a from'./download.jpg';
import b from './OIP (2).jpg';

const FeaturedProduct = () => {
  const products = [
    { id: 1,i:a,name: 'Nike Football', price: 99.99 },
    { id: 2,i:adi,name: 'Adidas Basketball', price: 79.99 },
    { id: 3,i:b,name: 'Under Armour Baseball Bat', price: 129.99 },
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.i} style={{ height: '200px' }}/>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProduct;