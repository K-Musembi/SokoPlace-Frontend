import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="featured-laptops"><FeaturedProducts title="Featured Laptops" category="laptop" /></section>
      <FeaturedProducts title="Featured Phones" category="phone" />
      <FeaturedProducts title="Featured Printers" category="printer" />
      <Footer />
    </div>
  );
};

export default Home
