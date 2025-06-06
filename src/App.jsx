import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './components/About'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from './components/context/CartContext'
import './App.css'

// Wrapper component to provide navigate prop and other page-specific props to Product
const ProductPageRoute = ({ title, category }) => {
  const navigate = useNavigate();
  return <Product title={title} category={category} navigate={navigate} />;
};

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<ProductPageRoute title="Laptops" category="laptop" />} />
          <Route path="/phones" element={<ProductPageRoute title="Phones" category="phone" />} />
          <Route path="/printers" element={<ProductPageRoute title="Printers" category="printer" />} />
          {/*<Route path="/product/:id" element={<ProductDetails />} />*/}
          <Route path="/cart" element={<Cart />} />
          {/*<Route path="/checkout" element={<Checkout />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
