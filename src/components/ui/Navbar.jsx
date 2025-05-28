import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <a href="#laptops">Laptops</a>
      <a href="#phones">Phones</a>
      <a href="#printers">Printers</a>
      <Link to="/cart">Cart 🛒</Link>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default Navbar;
