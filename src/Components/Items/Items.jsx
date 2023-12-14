import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/products/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className='item-price'>
            <div className="item-price-new">
                Rs. {props.old_price}
            </div>
            <div className="item-price-old">
                Rs. {props.new_price}
            </div>
        </div>
    </div>
  )
}

export default Items