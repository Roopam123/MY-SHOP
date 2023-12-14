import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductItems from '../Components/ProductItems/ProductItems'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/Description/DescriptionBox'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  // This line fillter the product by id
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <ProductItems product = {product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
    </div>
  )
}

export default Product
