import React from 'react'
import './Hero.css'
import handIcon from '../../Assets/hand_icon.png'
import arrowIcon from '../../Assets/arrow.png'
import heroImg from '../../Assets/hero_image.png'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrival Only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={handIcon} alt="arrowImg" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrowIcon} alt='arrowImg'/>
            </div>
        </div>
        <div className="hero-right">
             <img src={heroImg} alt="heroImg" />
        </div>
    </div>
  )
}

export default Hero