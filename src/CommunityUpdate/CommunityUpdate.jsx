import React from 'react'
import img1 from '../Assets/cummunity2a.png'
import img2 from '../Assets/community 2b.png'
import img3 from '../Assets/cummunity 2c.png'
const CommunityUpdate = () => {
  return (
    <div >
      <section className='cummunity_update'>
     <div className='community_text community2_text'>
     <h2>Caring is the new marketing</h2>
     <p>The Nextcent blog is the best place to read about the latest membership insights,
trends and more. See who s joining the community, read about how our community
are increasing their membership income and lot s more.</p>
</div>

      <section className='community_lower'>
     <div className='community_card2'>
      <img src={img1} alt="" />
      <div className='card_text2'>
      <h3>Creating Streamlined <br />
       Safeguarding Processes with <br />
       OneRen</h3>
       <div className='button'>
       Read More <span>&#8594;</span>
       </div>
       </div>
     </div>
     <div className='community_card2'>
      <img src={img2} alt="" />
      <div className='card_text2'>
      <h3>What are your safeguarding <br />
          responsibilities & how can <br />
          you manage them?</h3>
       <div className='button'>
       Read More <span>&#8594;</span>
       </div>
       </div>
     </div>
     <div className='community_card2'>
      <img src={img3} alt="" />
      <div className='card_text2'>
      <h3>Revamping the Membership <br /> Model with Triathlon <br /> Australia</h3>
       <div className='button'>
       Read More <span>&#8594;</span>
       </div>
       </div>
     </div>


      </section>
      </section>




    </div>
  )
}

export default CommunityUpdate
