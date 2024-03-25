import React from 'react'
import footMain from '../Assets/footer logo.PNG'
import insta from '../Assets/foot1.PNG'
import world from '../Assets/world.PNG'
import twitter from '../Assets/twitter.PNG'
import youtube from '../Assets/youtube.PNG'
import send from '../Assets/send.png'
const Footer = () => {
  return (
    <div>
      <section className='footer'>
       <div className='footer_left'>
        <img src={footMain} alt="" />
        <p>Copyright © 2020 Landify UI Kit. <br />All rights reserved</p>
        <div className='footer_social'> 
         <img src={insta} alt="" />
         <img src={world} alt="" />
         <img src={twitter} alt="" />
         <img src={youtube} alt="" />
        </div>
       </div>
       <div className='footer_right'>
        <div className='right1'>
          <h4>Company</h4>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
        <div className='right2'>
          <h4>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
        </div>
        <div className='right3'>
          <h4>Stay up to date</h4>
          <input type="email" placeholder="Enter your email" />
          <img src={send} alt="" />
        </div>



       </div>



      </section>


    </div>
  )
}

export default Footer
