import React from 'react'
import communityLogo1 from '../Assets/Icon.png'
import communityLogo2 from '../Assets/Icon (1).png'
import communityLogo3 from '../Assets/Icon (2).png'
const Community = () => {
  return (
    <div>
      <section className="community">
        <div className="community_text">
          <h2>
            Manage your entire community
            in a single system
          </h2>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className='community_sections'>
          <div className='community_card'>
          <img src={communityLogo1} alt="" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management  software provides full automation of 
            membership renewals and  payments
          </p>
          </div>
          <div className='community_card'>
          <img src={communityLogo2} alt="" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of 
            membership renewals and payments
          </p>
          </div>
          <div className='community_card'>
          <img src={communityLogo3} alt="" />
          <h3>Clubs And  Groups</h3>
          <p>
            Our membership management software provides full automation of 
            membership renewals and  payments
          </p>
        </div>
         </div>
      </section>
    </div>
  );
}

export default Community
