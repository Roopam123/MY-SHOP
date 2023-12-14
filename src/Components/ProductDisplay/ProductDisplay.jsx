import React from 'react'
import './ProductDisplay.css'
import start_icon from '../../Assets/star_icon.png'
import start_dull_icon from '../../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='productdisplay-image-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
            <img src={product.image} className='productdisplay-main-img' alt="" />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='product-display-right-star'>
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className='product-display-right-prices'>
                <div className='productdisplay-right-prices-old'>Rs.{product.old_price}</div>
                <div className='productdisplay-right-prices-new'>Rs.{product.new_price}</div>
            </div>
            <div className='product-display-right-discription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae voluptatem suscipit maiores, quaerat, dignissimos deleniti eum voluptatibus iste inventore quam doloremque consequatur temporibus fugiat? Labore esse asperiores fugiat id.
            </div>
            <div className='product-display-right-one'>
                <h1>Select Size</h1>
                <div className='product-display-right-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className='add-card'>
            <button>ADD TO Card</button>
                <p className='product-display-right-category'><span>Category: </span>{product.category} clothes</p>
                <p className='product-display-right-category'><span>Tags: </span>Modern , Latest </p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
