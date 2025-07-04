import Link from "next/link";
// import styles from "@/app/styles/navbar.module.scss";
import Image from "next/image";
import AweImg from "../../../assets/images/awe-logo.png";

const Navbar = () => {
    return (
        <main className="min-h-screen bg-[#112F1F] text-[#D4AF37] flex flex-col items-center justify-center px-4">
            <header className="w-full max-w-7xl py-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Elite & Beyond</h1>
                <nav className="space-x-6 text-[#D4AF37]">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <section className="text-center mt-16">
                <h2 className="text-4xl sm:text-6xl font-bold mb-6">Sustainable Growth Innovations</h2>
                <p className="text-lg text-gray-300 mb-10">
                    Advancing sustainable practices through innovative solutions for eco-conscious growth and development.
                </p>
                <button className="border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#112F1F] transition">
                    Learn More
                </button>
            </section>

            <div className="mt-16">
                <img src="/hero-plant.png" alt="Plant on Coir Pith" className="w-full max-w-md mx-auto" />
            </div>
        </main>
    );
};

export default Navbar;
