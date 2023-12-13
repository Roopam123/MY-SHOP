import React from 'react'
import excl_img from '../../Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>check now</button>
      </div>
      <div className='offers-right'>
        <img src={excl_img} alt="" />
      </div>
    </div>
  )
}

export default Offers