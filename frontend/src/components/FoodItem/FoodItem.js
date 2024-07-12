import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => { 
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)

  
 return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url+"/images/"+image} alt='FoodItem'/>
        {
         !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='Icon'></img>
         :<div className='food-item-counter'>
          <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}></img>
          <p>{cartItems[id]}</p>
          <img src={assets.add_icon_green} onClick={()=>addToCart(id)}></img>
          </div>
        }
      </div>

      <div className='food-item-info'>
        <div className='food-item-rating-info'>
            <p style={{fontSize:'20px',fontWeight:'500'}}>{name}</p>
            <img style={{width:'70px'}} src={assets.rating_starts} alt='Star rating'></img>
        </div>
        <p className='food-item-description' style={{color:'#676767',fontSize:'12px'}}>{description}</p>
        <p className='food-item-price' style={{margin:'10px 0px',color:'tomato',fontSize:'22px',fontWeight:500}}>&#8377;{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
