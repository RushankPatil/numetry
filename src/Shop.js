import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import adi from './OIP (1).jpg';
import a from'./download.jpg';
import b from './OIP (2).jpg';
import './shop.css';
const Shop = () => {
  const { handleAddToCart } = useContext(CartContext);
  const products = [
    { id: 1, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Football_iu_1996.jpg/1200px-Football_iu_1996.jpg', name: 'Football', price: 90 },
    { id: 2, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/1200px-Basketball.png', name: 'Basketball', price: 70 },
    { id: 3, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Baseball_bat.svg/1200px-Baseball_bat.svg.png', name: 'Baseball Bat', price: 100 },
    { id: 4, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tennis_racket.svg/1200px-Tennis_racket.svg.png', name: 'Tennis Racket', price: 120 },
    { id: 5, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Cricket_bat.svg/1200px-Cricket_bat.svg.png', name: 'Cricket Bat', price: 150 },
    { id: 6, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Volleyball.png/1200px-Volleyball.png', name: 'Volleyball', price: 60 },
    { id: 7, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hockey_stick.svg/1200px-Hockey_stick.svg.png', name: 'Hockey Stick', price: 110 },
    { id: 8, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Golf_club.svg/1200px-Golf_club.svg.png', name: 'Golf Club', price: 200 },
    { id: 9, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rugby_ball.svg/1200px-Rugby_ball.svg.png', name: 'Rugby Ball', price: 80 },
    { id: 10, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Badminton_racket.svg/1200px-Badminton_racket.svg.png', name: 'Badminton Racket', price: 50 },
    { id: 11, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ping_pong_paddle.svg/1200px-Ping_pong_paddle.svg.png', name: 'Ping Pong Paddle', price: 30 },
    { id: 12, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Soccer_ball.svg/1200px-Soccer_ball.svg.png', name: 'Soccer Ball', price: 90 },
    { id: 13, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bowling_ball.svg/1200px-Bowling_ball.svg.png', name: 'Bowling Ball', price: 130 },
    { id: 14, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Softball.svg/1200px-Softball.svg.png', name: 'Softball', price: 40 },
    { id: 15, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lacrosse_stick.svg/1200px-Lacrosse_stick.svg.png', name: 'Lacrosse Stick', price: 100 },
    { id: 16, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Handball.svg/1200px-Handball.svg.png', name: 'Handball', price: 70 },
    { id: 17, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Squash_racket.svg/1200px-Squash_racket.svg.png', name: 'Squash Racket', price: 90 },
    { id: 18, i: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Field_hockey_ball.svg/1200px-Field_hockey_ball.svg.png', name: 'Field Hockey Ball', price: 20 }
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.i} style={{ height: '200px' }}/>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <span>${product.price}</span><br/>
            <button onClick={() => handleAddToCart(product)} alert>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;