import React from 'react'
import customerpic from '../Assets/image 9.png'
import clientlogo1 from '../Assets/Logo (1).png'
import clientlogo2 from '../Assets/Logo (2).png'
import clientlogo3 from '../Assets/Logo (3).png'
import clientlogo4 from '../Assets/Logo (4).png'
import clientlogo5 from '../Assets/Logo (5).png'
import clientlogo6 from '../Assets/Logo (6).png'
const Customer = () => {
  return (
    <div>
      <section className="customer_main">
        <div className="customer_left">
          <img src={customerpic} alt="" />
        </div>
        <div className="customer_right">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus  tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie  mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse 
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien,  vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="right_inside">
            <div>
            <h3>Tim Smith</h3>
            <p>British Dragon Boat Racing Association</p>
            </div>
            <div className='right_side_logos'>
           <img src={clientlogo1} alt="" />
           <img src={clientlogo2} alt="" />
           <img src={clientlogo3} alt="" />
           <img src={clientlogo4} alt="" />
           <img src={clientlogo5} alt="" />
           <img src={clientlogo6} alt="" />
           <div className='button'>Meet all customers<span>&#8594;</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Customer
