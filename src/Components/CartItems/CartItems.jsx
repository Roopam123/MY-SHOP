import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <div className='cartItems-format-main'>
                <p>Product</p>
                <p>Tital</p>
                <p>Price</p>
                <p>Quantinty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((element) => {
                if (cartItems[element.id] > 0) {
                    return <div key={element.id}>
                        <div className='cartItem-formats cartItems-format-main'>
                            <img src={element.image} alt="" className='carticon-product-icon' />
                            <p>{element.name}</p>
                            <p>Rs. {element.new_price}</p>
                            <button className='cart-items-quantity'>{cartItems[element.id]}</button>
                            <p>Rs. {element.new_price*cartItems[element.id]}</p>
                            <img src={removeIcon} className='remove-btn' onClick={() => { removeFromCart(element.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className='cartItems-down'>
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-items-total-items">
                            <p>Subtotal</p>
                            <p>Rs. {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-items-total-items'>
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cart-items-total-items'>
                            <h3>Total</h3>
                            <h3>Rs. {getTotalCartAmount()}</h3>
                        </div>
                        <button className='btn-proceed'>Proceed To checkout</button>
                    </div>
                </div>
                <div className='cartItems-promocode'>
                        <p>If you have a promo code,Enter it here</p>
                        <div className='cartIcon-promocode'>
                            <input type="text"  placeholder='Promo Code'/>
                            <button>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
