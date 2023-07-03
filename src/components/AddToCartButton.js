import React from 'react';

function AddToCartButton({ item, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddToCartButton;