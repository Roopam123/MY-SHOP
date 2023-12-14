import React from 'react'
import './ProductItems.css'
import { Link } from 'react-router-dom'

const ProductItems = (props) => {
    const {product} = props
  return (
    <div className='prodIduct'>
       <Link to='/' style={{textDecoration:"none", color:"#5e5e5e"}}> <span>Home</span></Link>
       <Link to='/' style={{textDecoration:"none", color:"#5e5e5e"}}><span>Shop</span></Link>
       <Link to={`/${product.category}`} style={{textDecoration:"none", color:"#5e5e5e"}}> <span>{product.category}</span></Link>
       <span>{product.name}</span>
    </div>
  )
}

export default ProductItems