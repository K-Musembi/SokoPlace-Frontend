
const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">SokoPlace Gadget Shop</h1>
        <p className="py-6">
          For the best laptops, smart phones and printers in town. Fast and easy checkout process. Convenient and secure payment options.
        </p>
        <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero
