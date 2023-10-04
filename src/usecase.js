import React from 'react';
import './usecase.css';
const Usecase = () => {

    return(

        <div className='container'>
            <div className='hero1'>
                <h3 className='heading1'>Airtable unlocks efficiencies with Copy.ai</h3>
                <video  className="vde-content" controls/>
     
            </div>
            <div className='hero2'>
                <div className='herosub1'>
                    <h3 style={{color:"#817a99"}}>By Use Case</h3>
                    <p>Email Marketing</p>
                    <p>Blog Content</p>
                    <p>Social Media</p>
                    <p>Translations</p>
                    <p>Teams</p>
                </div>
                <div className='herosub2'>
                    <h3 style={{color:"#817a99"}}>Featured articles</h3>
                    <p>How Copy.ai Uses AI for Competitive Intelligence</p>
                    <p>Jasper vs Copy.ai: An honest & unbiased review (even where we lose)</p>
                    <p>15 AI Prompts to Supercharge Sales & Marketing Teams</p>
                </div>
            </div>
        </div>
    )
}

export default Usecase;