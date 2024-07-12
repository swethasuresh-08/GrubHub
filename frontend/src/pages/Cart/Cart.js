import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr />
        {food_list.map((item, index) => {

          if (cartItems[item._id] > 0) {
            console.log(cartItems[item._id])
            return (
              <>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image}></img>
                  <p>{item.name}</p>
                  <p>&#8377;{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>&#8377;{item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
        <h2>Cart Total</h2>
          <div className='cart-total-details'>
            <p>Sub Total</p>
            <p>&#8377;{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>&#8377;{getTotalCartAmount()===0?0:12}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <p>Total</p>
            <p>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount()+12}</p>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If You have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
            <input type='text' placeholder='Enter Your PromoCode'></input>
            <button>Submit</button>
            </div>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Cart
