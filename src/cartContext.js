import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
    alert(`${product.name} added to cart successfully!`);
  };

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price * product.quantity);
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(newCart);
    setTotal(
      newCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };