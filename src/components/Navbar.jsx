import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext'; // Import useCart

function Navbar() {
  const { getCartItemCount } = useCart();

  const navLinks = (
    <>
      <li><Link to="/" className="text-primary">Home</Link></li>
      <li><Link to="/laptops" className="text-primary">Laptops</Link></li>
      <li><Link to="/phones" className="text-primary">Phones</Link></li>
      <li><Link to="/printers" className="text-primary">Printers</Link></li>
      <li><Link to="/about" className="text-primary">About</Link></li>
      {/*<li><Link to="/contact" className="text-primary">Contact</Link></li>*/}
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-md sticky top-0 z-50 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold text-primary">SokoPlace</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/cart" className="btn btn-ghost">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {getCartItemCount > 0 && ( // Use getCartItemCount directly here
              <span className="badge badge-sm badge-primary indicator-item">{getCartItemCount}</span>
            )}
          </div>
          <span className="ml-1 hidden sm:inline text-primary">Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
