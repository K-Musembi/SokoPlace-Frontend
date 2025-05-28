import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchLaptops, fetchPhones, fetchPrinters } from '../services/apiServices'
import Card from '../components/ui/Card'
import Hero from '../components/ui/Hero'
import Header from '../components/ui/Header'

function Home() {
  const [laptops, setLaptops] = useState([])
  const [phones, setPhones] = useState([])
  const [printers, setPrinters] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchLaptops().then(setLaptops).catch(console.error)
    fetchPhones().then(setPhones).catch(console.error)
    fetchPrinters().then(setPrinters).catch(console.error)
  }, [])

  return (
    <div>
      <Hero />
      <Header />
      <section id="laptops">
        <h2>Featured Laptops</h2>
        {laptops.slice(0, 3).map((item) => (
          <Card
            key={item.id}
            title={item.name}
            description={item.specs}
            price={item.price}
            onView={() => navigate(`/product/${item.id}`)}
          />
        ))}
        <button onClick={() => navigate('/laptops')}>More</button>
      </section>

      <section id="phones">
        <h2>Top Mobile Phones</h2>
        {phones.slice(0, 3).map((item) => (
          <Card
            key={item.id}
            title={item.name}
            description={item.specs}
            price={item.price}
            onView={() => navigate(`/product/${item.id}`)}
          />
        ))}
        <button onClick={() => navigate('/phones')}>More</button>
      </section>

      <section id="printers">
        <h2>Best-Selling Printers</h2>
        {printers.slice(0, 3).map((item) => (
          <Card
            key={item.id}
            title={item.name}
            description={item.specs}
            price={item.price}
            onView={() => navigate(`/product/${item.id}`)}
          />
        ))}
        <button onClick={() => navigate('/printers')}>More</button>
      </section>
    </div>
  )
}

export default Home
