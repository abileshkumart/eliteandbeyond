'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About us', 'Products', 'Our Process'];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0D2818]/95 backdrop-blur-md shadow-lg shadow-black/20' 
        : 'bg-[#0D2818]'
    } text-[#FBF0D3]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
        <a href="#home" className="flex-shrink-0 flex items-center group cursor-pointer">
          <img
            src="/E&BLogo.svg"
            alt="Elite & Beyond logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="relative text-[#FBF0D3] hover:text-[#F5C76A] transition-colors duration-300 font-medium hover-underline"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact-us"
          className="hidden md:inline-block border-2 border-[#F5C76A] text-[#F5C76A] px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#F5C76A] hover:text-[#0D2818] transition-all duration-300 rounded-full"
        >
          Contact Us
        </a>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#0D2818]/95 backdrop-blur-md text-[#FBF0D3] px-4 pb-6 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="block py-3 px-4 text-lg font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact-us"
            className="block mt-4 border-2 border-[#F5C76A] text-[#F5C76A] text-center px-4 py-3 text-lg font-bold rounded-full hover:bg-[#F5C76A] hover:text-[#0D2818] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
