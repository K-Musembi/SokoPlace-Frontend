import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPhones } from '../services/apiServices'
import Card from '../components/ui/Card'

function Phones() {
  const [phones, setPhones] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchPhones().then(setPhones).catch(console.error)
  }, [])

  return (
    <div>
      <h2>All Phones</h2>
      {phones.map((item) => (
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

export default Phones
