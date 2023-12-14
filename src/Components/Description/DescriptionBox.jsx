import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
      <div className='description-box-navigation'>
        <div className="description-nav-box">Description</div>
        <div className='description-box-fade'>Reviews</div>
      </div>
      <div className='description-box-description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae inventore quia ipsam natus debitis delectus sapiente temporibus illo expedita maxime, a vitae corporis possimus quam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At id impedit molestiae nesciunt neque nulla ratione necessitatibus molestias cum veniam.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
