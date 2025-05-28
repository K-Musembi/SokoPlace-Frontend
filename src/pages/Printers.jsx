import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPrinters } from '../services/apiServices'
import Card from '../components/ui/Card'

function Printers() {
  const [printers, setPrinters] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchPrinters().then(setPrinters).catch(console.error)
  }, [])

  return (
    <div>
      <h2>All Printers</h2>
      {printers.map((item) => (
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

export default Printers
