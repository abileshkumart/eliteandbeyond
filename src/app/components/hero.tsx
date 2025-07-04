export default function Hero() {
    return (
        <section className="bg-[#0E2C19] text-[#F5C76A] min-h-[90vh] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-16 py-12 text-center sm:text-left">
            <div className="sm:w-1/2 mb-8 sm:mb-0" data-aos="fade-right">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                    Cultivating Tomorrow<br /> With Nature’s Best
                </h1>
                <p className="text-lg mb-6">
                    At Elite and Beyond, we harness the power of cocopeat to offer sustainable solutions for modern agriculture.
                </p>
                <div className="flex justify-center sm:justify-start">
                    <button className="w-full sm:w-auto border border-[#F5C76A] px-6 py-3 rounded hover:bg-[#F5C76A] hover:text-[#0E2C19] transition">
                        Explore Our Products
                    </button>
                </div>
            </div>
            <div className="sm:w-1/2 flex justify-center" data-aos="fade-left">
                <img src="/hero-plant.png" alt="Plant" className="max-h-[600px] sm:max-h-[540px] w-auto" />
            </div>
        </section>
    );
}
