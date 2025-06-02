import React from 'react'; 
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Hero />
      <FeaturedProducts title="Featured Laptops" category="laptop" navigate={navigate} />
      <FeaturedProducts title="Featured Phones" category="phone" navigate={navigate} />
      <FeaturedProducts title="Featured Printers" category="printer" navigate={navigate} />
      <About />
    </div>
  )
}

export default Home
