import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/product.jsx'
import Cart from './Pages/cart.jsx'
import Login from './Pages/login.jsx'
import Footer from './Components/Footer/Footer.jsx'
import men_banner from './Components/Assets/main.jpg'
import women_banner from './Components/Assets/main.jpg'
import kid_banner from './Components/Assets/main.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route 
        path='/mens' 
        element={<ShopCategory 
        banner={men_banner} category="men"/>}/>
        <Route 
        path='/womens' 
        element={<ShopCategory 
        banner={women_banner} category="women"/>}/>
        <Route 
        path='/kids' 
        element={<ShopCategory 
        banner={kid_banner} category="kid"/>}/>
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
