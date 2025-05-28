import React from 'react'
import { useLocation } from 'react-router-dom'

function ShoppingCart() {
  const { state } = useLocation()
  const cartItem = state?.product

  const handlePayment = () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      // Redirect to backend OAuth2 login (handled by Spring Boot backend)
      window.location.href = 'http://localhost:8080/oauth2/authorization/google'
    } else {
      alert('Proceeding to payment...')
    }
  }

  if (!cartItem) return <p>Your cart is empty.</p>

  return (
    <div className="card">
      <h2>Your Shopping Cart</h2>
      <p><strong>Item:</strong> {cartItem.name}</p>
      <p><strong>Price:</strong> ${cartItem.price}</p>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  )
}

export default ShoppingCart
