import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 14.99 },
    { id: 3, name: 'Product 3', price: 19.99 }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>React Shopping Cart</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
