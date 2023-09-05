import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem , removeItem } from '../../../feature/cart/cartsSlice';
import { SelectAllCart } from '../../../feature/cart/cartsSlice';
import "./cart.scss"
import '../../animation.scss'
function Cart() {

  const carts = useSelector(SelectAllCart);
  
  const dispatch = useDispatch();
  const filteredCarts =  carts.filter((item, index) => carts.indexOf(item) === index);
   
  const toatalPrice= (card)=>{
    const newArray = carts.filter((item) => item.id === card.id);
    const ArrayLength = newArray.length;
    const totalPrice  = ArrayLength*card.price;
    return totalPrice;
  }
  const subtotal = Math.round(filteredCarts.reduce((acc, card) => {
    return acc + toatalPrice(card);
  }, 0));
  const taxRate = 0.05; // 5% tax rate
  const tax = Math.round(subtotal * taxRate);
  const grandTotal =Math.round( subtotal + tax);


  console.log(filteredCarts)
 

  const onRemoveClick = (card) => { 
  dispatch(removeItem(card));
  }

  const minOnClick =(card)=>{
    dispatch(removeItem(card))


  }
  const plusOnClick =(card)=>{
    console.log({card})
    dispatch(addItem(card))
}
  
  
  return (
<div className= "product">
     <div class="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
     </div>  
     {console.log({filteredCarts})}
    {
      filteredCarts.map((card)=>{
        return(
       <div className ="product" >
         <div class="shopping-cart fade-left">

              <div className="product-image"><img src ={card.image}/></div>

              <div className="product-details"> 
              <div className = "product-title">{card.title}</div>
              <p className = "product-description">{card.description} </p>
              </div>
              <div className = "product-price">{card.price}</div>
              <div class="product-quantity">
              <button className = "Counter" onClick={() => minOnClick(card.id)}>-</button>
              <input type="text"   value={(() => {
              const newArray = carts.filter((item) => item.id === card.id);
             return newArray.length;
      })()}/>
              <button className="Counter" onClick={() => plusOnClick(card)}>+</button>
            </div>
              <div class="product-removal">
               <button class="remove-product" onClick= {() => onRemoveClick(card.id)}>Remove</button>
              </div>
              <div class="product-line-price">{Math.round(toatalPrice(card)) }</div>

              </div>


        </div>
        )
      })
    }

<div class="totals">
             <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">{subtotal}</div>
            </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">{tax}</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">{grandTotal}</div>
    </div>
  </div>
      
      <button class="checkout">Checkout</button>

</div>
  )
}

export default Cart