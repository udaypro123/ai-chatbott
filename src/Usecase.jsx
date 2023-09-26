import React from 'react'
import video from './Image/video.mp4'

const Usecase = () => {
  return (
    <div className='Wrapper'>
        <div className="video-box">
            <h2>Airtable unlocks efficiencies with Copy.ai</h2>
            <hr />
            <div className="box1">
            <video src={video} width="450" height="350" controls="controls" /> 
            </div>
        </div>
        <div className="block1">
            <h2>By Use Case</h2>
            <hr />
            <a href=""><h3>Email Marketing</h3></a>
            <a href=""><h3>Blog Content</h3></a>
            <a href=""><h3>Social Media</h3></a>
            <a href=""><h3>Translation</h3></a>
            <a href=""><h3>Teams</h3></a>
        </div>
        <div className="block2">
            <h2>Featured articles</h2>
            <hr />
            <a href=""><h3>How Copy.ai Uses AI for Competitive Intelligence</h3></a>
            <a href=""><h3>Jasper vs Copy.ai: An honest & unbiased review (even where we lose)</h3></a>
            <a href=""><h3>15 AI Prompts to Supercharge Sales & Marketing Teams</h3></a>
        </div>
      
    </div>
  )
}

export default Usecase
