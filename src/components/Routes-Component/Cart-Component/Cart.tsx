import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem , removeItem } from '../../../feature/cart/cartsSlice';
import { SelectAllCart } from '../../../feature/cart/cartsSlice';
import "./cart.scss"
import '../../animation.scss'
import { Link } from 'react-router-dom';
function Cart() : JSX.Element {


  interface Product {
    id  :  number , 
    title : string, 
    price : number , 
    image  : string ,
    description : string,
  }


  const carts = useSelector(SelectAllCart);
  
  const dispatch = useDispatch();
  const filteredCarts =  carts.filter((item: Product, index:number) => carts.indexOf(item) === index);
   
  const toatalPrice= (product : Product)=>{
    const newArray = carts.filter((item:Product) => item.id === product.id);
    const ArrayLength = newArray.length;
    const totalPrice  = ArrayLength*product.price;
    return totalPrice;
  }
  const subtotal = Math.round(filteredCarts.reduce((acc :number, product :Product) => {
    return acc + toatalPrice(product);
  }, 0));
  const taxRate = 0.05; // 5% tax rate
  const tax = Math.round(subtotal * taxRate);
  const grandTotal =Math.round( subtotal + tax);


  console.log(filteredCarts)
 

  const onRemoveClick = (product : number) => { 
  dispatch(removeItem(product));
  }

  const minOnClick =(product: number)=>{
    dispatch(removeItem(product))


  }
  const plusOnClick =(product :Product)=>{
    dispatch(addItem(product))
}
  
  
  return (

<div className= "product">

     <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
     </div>  
     {console.log({filteredCarts})}
    {
      filteredCarts.map((product:Product)=>{
        return(
       <div className ="product" key={product.id} >
         <div className="shopping-cart fade-left">

              <div className="product-image"><img src ={product.image}/></div>

              <div className="product-details"> 
              <div className = "product-title">{product.title}</div>
              <p className = "product-description">{product.description} </p>
              </div>
              <div className = "product-price">{product.price}</div>
              <div className="product-quantity">
              <button className = "Counter" onClick={() => minOnClick(product.id)}>-</button>
              <input type="text"   value={(() => {
              const newArray = carts.filter((item : any) => item.id === product.id);
             return newArray.length;
      })()}/>
              <button className="Counter" onClick={() => plusOnClick(product)}>+</button>
            </div>
              <div className="product-removal">
               <button className="remove-product" onClick= {() => onRemoveClick(product.id)}>Remove</button>
              </div>
              <div className="product-line-price">{Math.round(toatalPrice(product)) }</div>

              </div>


        </div>
        )
      })
    }
<div className="totals">
     
             <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{subtotal}</div>
            </div>
    <div className="totals-item">
      <label>Tax (5%)</label>
      <div className="totals-value" id="cart-tax">{tax}</div>
    </div>
    <div className="totals-item">
      <label>Shipping</label>
      <div className="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div className="totals-item totals-item-total">
      <label>Grand Total</label>
      <div className="totals-value" id="cart-total">{grandTotal}</div>
    </div>
  </div>
      
      <Link to ='/orders'><button className="checkout">Checkout</button></Link>
     

      


</div>
  )
}

export default Cart