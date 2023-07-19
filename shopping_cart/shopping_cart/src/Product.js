import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.n}</h3>
      <p>{product.cost}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
