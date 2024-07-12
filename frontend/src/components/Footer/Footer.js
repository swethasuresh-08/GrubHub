import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src='/Grubhub-Logo.png' style={{height:'150px'}} ></img>
            <p>Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the Grubhub app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door.</p>
            <div className='footer-social-icon' style={{width:'40px'}}>
                <img src={assets.facebook_icon} alt="Fb" />
                <img src={assets.linkedin_icon} alt="Ig" />
                <img src={assets.twitter_icon} alt="Tweet" />
            </div>
        </div>
        <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@grubhub.com</li>
                </ul>
        </div>  
      </div>
      <hr></hr>
      <p className='footer-copyright'>Copyright 2024 @GrubHub - All rights Reserved</p>
    </div>
  )
}

export default Footer
