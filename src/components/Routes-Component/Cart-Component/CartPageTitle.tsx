import React from 'react'

function CartPageTitle() {
  return (
    <div className="column-labels">
      <label className="product-image">Image</label>
      <label className="product-details">Product</label>
      <label className="product-price">Price</label>
      <label className="product-quantity">Quantity</label>
      <label className="product-removal">Remove</label>
      <label className="product-line-price">Total</label>
    </div>
)
}

export default CartPageTitle