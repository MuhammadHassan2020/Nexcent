import React from 'react'
import unlockMain from '../Assets/unlock.PNG'
const Unlock = () => {
  return (
    <div>
      <section className="unlock_main">
        <div className="unlock_img">
          <img src={unlockMain} alt="" />
        </div>
        <div className="unlock_text">
          <h2>The unseen of spending three  years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed  accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed  porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam  quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className='button'>
            Learn More
          </div>
        </div>
      </section>
    </div>
  );
}

export default Unlock
