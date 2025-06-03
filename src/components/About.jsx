
const About = () => {
    return (
        <div className="py-12 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight text-primary">About SokoPlace</h2>
                    <p className="text-lg text-primary mt-2 leading-relaxed">Your one-stop shop for the latest tech.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About SokoPlace - Commercial Printer" className="rounded-lg shadow-lg mx-auto md:mx-0 object-cover h-80 w-full md:h-full" />
                    </div>
                    <div className="prose lg:prose-lg text-base-content/90">
                        <p>Welcome to SokoPlace! We are passionate about bringing you the best and latest in technology, from high-performance laptops and cutting-edge smartphones to reliable printers and essential accessories.</p>
                        <p>Our mission is to provide a seamless shopping experience, offering top-quality products at competitive prices. We believe in customer satisfaction and strive to exceed your expectations with every purchase.</p>
                        <p>Explore our curated selection and discover why SokoPlace is the preferred destination for tech enthusiasts and everyday users alike. Thank you for choosing us!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
