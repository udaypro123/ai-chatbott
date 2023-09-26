import React from 'react'
import img1 from './Image/img1.png'
import img2 from './Image/img2.svg'
import img3 from './Image/img3.png'
import img4 from './Image/img4.webp'

const Cdd = () => {
  return (
    <div className='class-wrapper'>
      <div className="wrpper1">
        <h1>Try Copy.ai Risk-Free</h1>
      </div>

      <div className="wrpper2">
        <h2>
          Whether you need simple generative AI tools or complex AI-powered<br/>
          workflows, Copy.ai offers a secure and reliable generative AI platform as you<br/> 
          scale.
        </h2>
      </div>

      <div className="wrpper3">
        <h3>Trusted at companies large and small</h3>
      </div>

      <div className="wrpper4">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
      </div>

    </div>
  )
}

export default Cdd
