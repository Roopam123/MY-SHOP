import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mans' element={<ShopCategory category="mans"/>}/>
        <Route path='/womans' element={<ShopCategory category="womans"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/products' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
