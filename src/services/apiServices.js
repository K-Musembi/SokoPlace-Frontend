import axios from 'axios'

// JavaScript enables ASI - automatic semicolon insertion

const API_BASE = 'http://localhost:8080/api' // Change to your backend URL

export const fetchLaptops = async () => {
  try {
    const res = await axios.get(`${API_BASE}/laptops`)
    return res.data
  } catch (error) {
    console.error('Failed to load laptops:', error)
    throw error
  }
}

export const fetchPhones = async () => {
  try {
    const res = await axios.get(`${API_BASE}/phones`)
    return res.data
  } catch (error) {
    console.error('Failed to load phones:', error)
    throw error
  }
}

export const fetchPrinters = async () => {
  try {
    const res = await axios.get(`${API_BASE}/printers`)
    return res.data
  } catch (error) {
    console.error('Failed to load printers:', error)
    throw error
  }
}

export const fetchProductDetails = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/products/${id}`)
    return res.data
  } catch (error) {
    console.error('Product not found:', error)
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