import React from 'react'
import './ProductItems.css'
import { Link } from 'react-router-dom'

const ProductItems = (props) => {
    const {product} = props
  return (
    <div className='prodIduct'>
       <Link to='/' style={{textDecoration:"none", color:"#5e5e5e"}}>Home   &gt;</Link>
       <Link to='/' style={{textDecoration:"none", color:"#5e5e5e"}}>Shop   &gt;</Link>
       <Link to={`/${product.category}`} style={{textDecoration:"none", color:"#5e5e5e"}}>{product.category}  &gt;</Link>
        {product.name}
    </div>
  )
}

export default ProductItems