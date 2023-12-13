import React  from 'react'
import './NewsLatter.css'

const NewsLatter = () => {
  return (
    <div className='newlatter'>
        <h1>Get Exclusive offer on your email</h1>
        <p>Subscribe to our news latter and stay update</p>
        <div className='newslatter-input'>
            <input type="email" placeholder='Enter you mail id'/>
            <button type="submit">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLatter