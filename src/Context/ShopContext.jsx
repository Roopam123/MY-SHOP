import React,{createContext, useState} from "react";
import all_product from '../Assets/all_product'

export const ShopContext = createContext(null)

    // function for the add to card page 
    const getDefaultCard = ()=>{
        let cart = {}
        for (let i = 0; i < all_product.length+1; i++) {
            cart[i] = 0;
        }
        return cart
    }
const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCard())
    // Add to card
    const addToCart = (itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
    // remove the card
    const removeFromCart = (itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (let item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const totalItem = ()=>{
        let totalItem = 0;
        for (let item in cartItems){
            if (cartItems[item]>0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }
    // send data to componets
    const contextValue = {all_product,cartItems,totalItem,getTotalCartAmount,addToCart,removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;