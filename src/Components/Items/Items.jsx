import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className='item-price'>
            <div className="item-price-new">
                {props.oldPrice}
            </div>
            <div className="item-price-old">
                {props.newPrice}
            </div>
        </div>
    </div>
  )
}

export default Items