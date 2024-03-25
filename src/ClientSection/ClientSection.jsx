import React from 'react'
import clientlogo1 from '../Assets/Logo (1).png'
import clientlogo2 from '../Assets/Logo (2).png'
import clientlogo3 from '../Assets/Logo (3).png'
import clientlogo4 from '../Assets/Logo (4).png'
import clientlogo5 from '../Assets/Logo (5).png'
import clientlogo6 from '../Assets/Logo (6).png'
import clientlogo7 from '../Assets/Logo (3).png'

const ClientSection = () => {
  return (
    <div>
      <section className='clients'>
        <div className='clients_text'>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        </div>
      <div className='clients_logo'>
      <img src={clientlogo1} alt="" />
      <img src={clientlogo2} alt="" />
      <img src={clientlogo3} alt="" />
      <img src={clientlogo4} alt="" />
      <img src={clientlogo5} alt="" />
      <img src={clientlogo6} alt="" />
      <img src={clientlogo7} alt="" />
      </div>

      </section>




    </div>
  )
}

export default ClientSection
