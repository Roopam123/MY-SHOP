import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropDownIcon from '../Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  const { banner } = props
  return (
    <div className='shop-category'>
      <img src={banner} className='shop-category-banner' alt="" />
      <div className='shopcategory-indexshort'>
        <p>
          <span>showing 1-12</span> out of 36 product
        </p>
        <div className='dropDown'>
          <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className='shopCategory'>
          {
            all_product.map((ele,i)=>{
              if (ele.category===props.category) {
                return <Items  key={i} 
                id={ele.id} 
                name={ele.name} 
                image={ele.image} 
                new_price={ele.new_price}
                old_price={ele.old_price}
                />
              } else{
                return null
              }
            })
          }
        </div>
        <div className='shop-category-loadmore'>
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory
