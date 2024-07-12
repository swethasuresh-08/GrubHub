import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopUp = ({ setShowLogin }) => {
  
  const {url,setToken}=useContext(StoreContext)
  const [currState, setCurrState] = useState("Login")
  
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData(data=>({
      ...data,
      [name]:value
     }))
  }

  const onLogin=async (event)=>{
    
    event.preventDefault()
    let newUrl=url
    if(currState==="Login")
    {
      newUrl+="/api/user/login"
    }
    else
    {
      newUrl+="/api/user/register"
    }
    console.log(newUrl,data)
    try{
      const response =await axios.post(newUrl,data)
      if(response.data.success)
        {
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
        }
        else
        {
          console.log(response.data.message)
        } 
    }
    catch(error)
    {
      console.log(error)
    }
   
  }

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={onLogin}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)}></img>
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? <></> : <input type='text' onChange={onChangeHandler} name='name' value={data.name} placeholder='Enter Your Name' required></input>}

          <input type='email' onChange={onChangeHandler} name='email' value={data.email} placeholder='Enter Your Email' required></input>
          <input type='password' onChange={onChangeHandler} name='password' value={data.password} placeholder='Enter Password' required></input>
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className='login-popup-conditions'>
          <input type='checkbox' required></input>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>

        {
            currState === "Login"
              ? <p>Create new account?<span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
              : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>

        }


      </form>
    </div>
  )
}

export default LoginPopUp
