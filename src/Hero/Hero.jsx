import React from 'react'
import heroImage from '../Assets/hero-image.jpeg'




const Hero = () => {
  return (
    <div>
      <section className='hero'>
<div className='hero_left'>
    <h1>
    Lessons and insights <span>from 8 years</span> 
    </h1>
    <p>
    Where to grow your business as a photographer: site or social media?
    </p>
    <div className="button">
            <p>Register</p>
     </div>
</div>
<div className='hero_img'>
    <img src={heroImage} alt="" />

</div>
      </section>

    </div>
  )
}

export default Hero
