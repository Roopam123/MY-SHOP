import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import man_banner from './Assets/banner_mens.png'
import woman_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/man' element={<ShopCategory category="men" banner={man_banner}/>}/>
        <Route path='/women' element={<ShopCategory category="women" banner={woman_banner}/>}/>
        <Route path='/kid' element={<ShopCategory category="kid" banner={kids_banner}/>}/>
        <Route path='/products' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
