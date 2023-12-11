import React from 'react'
import './Popular.css'
import data_product from '../../Assets/data.js'
import Items from '../Items/Items.jsx'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((ele,i)=>{
          return <Items
                        key={i} 
                        id={ele.id} 
                        name={ele.name} 
                        image={ele.image} 
                        new_price={ele.new_price}
                        old_price={ele.old_price}
                        />
        })}
      </div>
    </div>
  )
}

export default Popular