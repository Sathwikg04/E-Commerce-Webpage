import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/shop.jsx'
import ShopCatregory from './Pages/shopCatregory.jsx'
import Product from './Pages/product.jsx'
import Cart from './Pages/cart.jsx'
import Login from './Pages/login.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route 
        path='/mens' 
        element={<ShopCatregory category="mens"/>}/>
        <Route 
        path='/womens' 
        element={<ShopCatregory category="womens"/>}/>
        <Route 
        path='/kids' 
        element={<ShopCatregory category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
