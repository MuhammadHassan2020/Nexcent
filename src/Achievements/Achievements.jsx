import React from 'react'
import achieveLogo1 from '../Assets/Icon (3).png'
import achieveLogo2 from '../Assets/Icon (4).png'
import achieveLogo3 from '../Assets/Icon (5).png'
import achieveLogo4 from '../Assets/Icon (6).png'
const achieves = () => {
  return (
    <div>
      <section className='achieve_main'>
       <div className='achieve_left'>
       <h2> Helping a local  <span>business reinvent itself</span></h2>
      <p>We reached here with our hard work and dedication</p>
       </div>
       <div className='achieve_right'>
        {/* <div className='right_main'> */}
          <div className='values-logos'>
           <div className='achieve_card' > 
            <img src={achieveLogo1} alt="" />
             <div className='card_text'>
             <h2>2,245,341</h2>
             <p>Members</p></div>
          </div>
           <div className='achieve_card' > 
            <img src={achieveLogo3} alt="" />
             <div className='card_text'>
             <h2>828,867</h2>
             <p>Event Bookings</p></div>
           </div>
        </div>
          <div className='values-logos'>
           <div className='achieve_card' > 
            <img src={achieveLogo2} alt="" />
             <div className='card_text'>
             <h2>46,328</h2>
             <p>Clubs</p></div>
          </div>
           <div className='achieve_card' > 
            <img src={achieveLogo4} alt="" />
             <div className='card_text'>
             <h2>1,926,436</h2>
             <p>Payments</p></div>
           </div>
        </div>
        {/* </div> */}
       </div>
      </section>
    </div>
  )
}

export default achieves
