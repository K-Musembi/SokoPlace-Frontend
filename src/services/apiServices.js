import axios from 'axios'

// JavaScript enables ASI - automatic semicolon insertion

const API_BASE = 'http://localhost:8080/api'

export const fetchProduct = async (productName) => {
  try {
    const res = await axios.get(`${API_BASE}/product/${productName}`)
    return res.data
  } catch (error) {
    console.error(`Failed to load ${data.name}:`, error)
    throw error
  }
}

export const fetchProductDetails = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/products/${id}`)
    return res.data
  } catch (error) {
    console.error('Product not available:', error)
    throw error
  }
}
export const fetchCart = async (userId) => {
  try {
    const res = await axios.get(`${API_BASE}/cart/${userId}`)
    return res.data
  } catch (error) {
    console.error('Failed to load cart:', error)
    throw error
  }
}