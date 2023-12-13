import React, { useState } from 'react'
import Logo from '../../Assets/logo.png'
import Card from '../../Assets/cart_icon.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  // const [fixednav,setFixednav] = useState(false)

  // handle = ()=>{
  //   window.addEventListener("scroll",()=>{
  //     if (window.screenY>200) {
  //       setFixednav(true)
  //     }
  //   })
  // }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'><img src={Logo} alt="logo" /></Link>
        <Link to='/' style={{textDecoration:"none"}}><p className='logo-name'>MY STORE</p></Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("shop")}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("man")}><Link to='/mans' style={{textDecoration:'none'}}>Mens</Link>{menu==="man"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("woman")}><Link to='/womans' style={{textDecoration:'none'}}>Womans</Link>{menu==="woman"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='login-card'>
       <Link to='/login'><button className='login-btn'>Login</button></Link>
        <Link to='/cart'><img src={Card} alt='card'/></Link>
        <div className='nav-card-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar