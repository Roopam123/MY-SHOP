import React from 'react'
// import data_products from '../../Assets/data'
import Items from '../Items/Items'
import './RelatedProducts.css'
import all_product from '../../Assets/all_product'

const RelatedProducts = (props) => {
  const {product} = props
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className='relatedProduct-items'>
          { all_product.map((ele,i)=>{
              if (ele.category===product.category) {
                return <Items
                key={i} 
                id={ele.id} 
                name={ele.name} 
                image={ele.image} 
                new_price={ele.new_price}
                old_price={ele.old_price}
                />
              }
              else{
                return null
              }
            }
          )
          }
        </div>
    </div>
  )
}

export default RelatedProducts
