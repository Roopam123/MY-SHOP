import React, { useState } from 'react'
import Logo from '../../Assets/logo.png'
import Card from '../../Assets/cart_icon.png'
import "./Navbar.css"


const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt="logo" />
        <p>MY STORE</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("shop")}>Shop {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("man")}>Man {menu==="man"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("woman")}>Woman {menu==="woman"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}>Kids {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='login-card'>
        <button>Login</button>
        <img src={Card} alt='card'/>
        <div className='nav-card-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar