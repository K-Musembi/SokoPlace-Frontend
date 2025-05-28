import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchLaptops } from '../services/apiServices'
import Card from '../components/ui/Card'

function Laptops() {
  const [laptops, setLaptops] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchLaptops().then(setLaptops).catch(console.error)
  }, [])

  return (
    <div>
      <h2>All Laptops</h2>
      {laptops.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          description={item.specs}
          price={item.price}
          onView={() => navigate(`/product/${item.id}`)}
        />
      ))}
    </div>
  )
}

export default Laptops
