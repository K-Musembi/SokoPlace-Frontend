
const About = () => {
    return (
        <div className="py-12 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">About SokoPlace</h2>
                    <p className="text-lg text-base-content/80 mt-2">Your one-stop shop for the latest tech.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="About SokoPlace" className="rounded-lg shadow-lg mx-auto md:mx-0" />
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
