import Image from 'next/image';

const products = [
    {
        name: "Cocopeat Block",
        useCase: "Soil Conditioning & Horticulture",
        image: "/cocopeat.png" // replace with your actual image path
    },
    {
        name: "Cocopeat Bag",
        useCase: "Commercial Farming",
        image: "/cocopetvermiccompost.png"
    },
    {
        name: "Cocopeat Brick",
        useCase: "Nurseries & Gardens",
        image: "/cocopeatbrick.png"
    }
];

export default function ProductsSection() {
    return (
        <section className="bg-[#1B4D33] text-[#F7E6B5] py-16 px-6 sm:px-16">
            <div className="text-center mb-12" data-aos="fade-up">
                <p className="uppercase text-sm mb-2">Our Products</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Crafted for Growth</h2>
                <p className="max-w-2xl mx-auto text-[#F7E6B5]/90">
                    We provide cocopeat products to enhance growth, improve soil, and support farming.
                    Each product is crafted for optimal performance for growers and commercial operations.
                </p>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                        <div className="relative w-48 h-48 mb-6">
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="mb-4 text-[#F7E6B5]/80">{product.useCase}</p>
                        <button className="border border-[#F7E6B5] px-6 py-2 rounded hover:bg-[#F7E6B5] hover:text-[#1B4D33] transition">
                            ENQUIRE NOW
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

