import React from 'react'
import unlock2 from '../Assets/unlock2.PNG'
const FemaleUnlock = () => {
  return (
    <div>
      <section className="unlock_main unlock2_main">
        <div className="unlock_img unlock2_img">
          <img src={unlock2} alt="" />
        </div>
        <div className="unlock_text">
          <h2>
            How to design your site footer like  we did
          </h2>

          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt  molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at  libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer  in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi  ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className="button">Learn More</div>
        </div>
      </section>
    </div>
  );
}

export default FemaleUnlock
