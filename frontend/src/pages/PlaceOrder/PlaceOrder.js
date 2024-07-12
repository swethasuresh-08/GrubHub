import React, { useContext, useEffect, useState,useNavigate } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import  axios  from 'axios'
const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData((data)=>({
      ...data,
      [name]:value
  }))
  }

  const placeOrder=async (event)=>{
    event.preventDefault()
    let orderItems=[]
    food_list.map((item)=>{
      if(cartItems[item._id]>0)
        {
          let itemInfo=item
          itemInfo["quantity"]=cartItems[item._id]
          orderItems.push(itemInfo)
        }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+12
    }

    let response=await axios.post(url+"/api/order/placeOrder",orderData,{headers:{token}})
    if(response.data.success)
    {
      const {session_url}=response.data
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
     
  }
const navigate=useNavigate()
  useEffect(()=>{
    if(!token)
      navigate('/cart')
    else if(getTotalCartAmount()===0)
      navigate('/cart')

  },[token])
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required type='text' onChange={onChangeHandler} name='firstName' placeholder='First Name'></input>
          <input required type='text' onChange={onChangeHandler} name='lastName' placeholder='Last Name'></input>
        </div>
        <input required type="email" onChange={onChangeHandler} name='email' placeholder='Email Address' />
        <input required type="text" onChange={onChangeHandler} name='street' placeholder='Street'/>
        <div className='multi-fields'>
          <input required type='text' onChange={onChangeHandler} name='city' placeholder='City'></input>
          <input required type='text' onChange={onChangeHandler} name='state' placeholder='State'></input>
        </div>
        <div className='multi-fields'>
          <input required type='text' onChange={onChangeHandler} name='zipcode' placeholder='Zip Code'></input>
          <input required type='text' onChange={onChangeHandler} name='country' placeholder='Country'></input>
        </div>
        <input required type='text' onChange={onChangeHandler} name='phone' placeholder='Phone'></input>
      </div>
      <div className="place-order-right">
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
          <button type='submit'>Proceed To Payment</button>
     
        </div>
      
      </div>
    </form>
  )
}

export default PlaceOrder
