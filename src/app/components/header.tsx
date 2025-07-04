'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About us', 'Products', 'Our Process'];

  return (
    <header className="sticky top-0 z-50 bg-[#0b2e1a] text-[#f7e6b5] shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center space-x-2 font-semibold text-lg">
          {/* Replace with real logo */}
          {/* <span className="text-yellow-400">🦋</span> */}
          <img
            src="/E&BLogo.svg"
            alt="Elite & Beyond logo"
            className="h-10 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          />
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="hover:text-yellow-300 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact-us"
          className="hidden md:inline-block border border-yellow-300 px-4 py-2 text-sm font-semibold hover:bg-yellow-300 hover:text-black transition"
        >
          CONTACT US
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b2e1a] text-[#f7e6b5] px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="block py-2 text-base sm:text-lg" // Reduced font size for mobile
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact-us"
            className="block mt-2 border border-yellow-300 text-center px-4 py-2 text-base sm:text-lg" // Reduced font size for mobile
          >
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
}
