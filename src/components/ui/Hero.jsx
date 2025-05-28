function Hero() {
  return (
    <section className="hero">
      <h1>SokoPlace: Your One-Stop Gadget Shop</h1>
      <p>
        Explore the latest gadgets at unbeatable prices. From cutting-edge laptops to smartphones and printers,
        find the tech you need fast and easy.
      </p>
      <button onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}>Shop Now</button>
    </section>
  )
}

export default Hero
// This Hero component serves as the landing section of the homepage, providing a brief introduction and a call-to-action button.