import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home")
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate()
    const logout=()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate("/")
    }
    const changeUrl=()=>{
     window.location.replace('https://grubhub-admin.onrender.com')
    }
    return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt='Logo'/> </Link>
       
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
    
      
        <div className="navbar-right">
          <img src={assets.search_icon} alt='searchBar'></img>
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt='basketIcon'></img></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
          :<div className='navbar-profile'>
              <img src={assets.profile_icon}></img>
              <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}></img><p>Orders</p></li>
              <hr></hr>
              <li onClick={logout}><img src={assets.logout_icon}></img><p>LogOut</p></li>
              </ul>
          </div>
          }
            <button onClick={changeUrl}>Admin Panel</button>
           </div>
    </div>
  )
}

export default Navbar
