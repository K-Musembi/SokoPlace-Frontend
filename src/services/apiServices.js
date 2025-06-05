import axios from 'axios'

// JavaScript enables ASI - automatic semicolon insertion

const API_BASE = 'http://localhost:8080/api/v1'

export const fetchProduct = async (productName) => {
  try {
    const res = await axios.get(`${API_BASE}/products/category/${productName}`)
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

export const createOrder = async (formData) => {
  const email = formData.email;
  const name = email.split("@")[0];
  const orderData = { name, email }

  let userId;

  try {
    const response = await axios.post(`${API_BASE}/customers`, orderData);
    userId = response.data.id;
  } catch {
    console.error('User already exists:', error)
    throw error;
  }
  
  try {
    const res = await axios.get(`${API_BASE}/orders/${userId}`);
    return res.data;
  } catch (error) {
    console.error('Failed to load cart:', error);
    throw error;
  }
}