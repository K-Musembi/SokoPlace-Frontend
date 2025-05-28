import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Laptops from './pages/Laptops'
import Phones from './pages/Phones'
import Printers from './pages/Printers'
import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/printers" element={<Printers />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
