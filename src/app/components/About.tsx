export default function About() {
    return (
        <section className="bg-[#143D2A] text-[#F5C76A] py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl" data-aos="fade-right">
                <p className="text-sm uppercase mb-4">About us</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Our Roots,<br />Our Mission
                </h2>
                <p className="text-[#F5C76A]/80 text-lg leading-relaxed">
                    Elite and Beyond is a forward-thinking manufacturer specializing in premium
                    cocopeat products. Our mission is to provide sustainable, high-quality
                    growing mediums that support eco-conscious agricultural practices around
                    the world.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
                <img src="/Aboutus.png" alt="Farmers illustration" className="object-contain w-full h-auto" />
            </div>
        </section>
    );
}
