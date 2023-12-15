import React, { useContext, useState } from 'react'
import Logo from '../../Assets/logo.png'
import Card from '../../Assets/cart_icon.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const {totalItem} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'><img src={Logo} alt="logo" /></Link>
        <Link to='/' style={{ textDecoration: "none" }}><p className='logo-name'>MY STORE</p></Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}><Link to='/' className='nav-content' style={{ textDecoration: 'none' }}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("man")}><Link to='/man' style={{ textDecoration: 'none' }} className='nav-content'>Mens</Link>{menu === "man" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("woman")}><Link to='/women' style={{ textDecoration: 'none' }}
          className='nav-content'>Womans</Link>{menu === "woman" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("kids")}><Link to='/kid' style={{ textDecoration: 'none' }} className='nav-content'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='login-card'>
        <Link to='/login'><button className='login-btn'>Login</button></Link>
        <Link to='/cart'><img src={Card} alt='card' /></Link>
        <div className='nav-card-count'>{totalItem()}</div>
      </div>
    </div>
  )
}

export default Navbar