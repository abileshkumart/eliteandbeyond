import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0E2C19] text-[#F5C76A] py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

        {/* Brand + Copy */}
        <div>
          <p className="font-semibold text-lg">© 2025 Elite and Beyond</p>
          <p className="text-sm text-[#F5C76A]/80">All rights reserved.</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-6">
          <a href="#" aria-label="Instagram" className="hover:text-[#F5C76A]/80 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#F5C76A]/80 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#F5C76A]/80 transition">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
