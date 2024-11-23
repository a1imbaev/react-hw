import React from 'react';
import './index.css';

const ProductCard = ({ data }) => {
  const { image, title, price, category } = data;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3 className="product-title">{title}</h3>
        <div className="product-footer">
          <div className="product-price">${price.toFixed(2)}</div>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
