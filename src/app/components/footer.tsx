'use client';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'Cocopeat Block', href: '#products' },
    { name: 'Cocopeat Grow Bag', href: '#products' },
    { name: 'Cocopeat Brick', href: '#products' },
    { name: 'Custom Orders', href: '#contact-us' },
  ],
  company: [
    { name: 'About Us', href: '#about-us' },
    { name: 'Our Process', href: '#our-process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact-us' },
  ],
  resources: [
    { name: 'Product Catalog', href: '#' },
    { name: 'Quality Certifications', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0E2C19] to-[#071810] text-[#F5C76A]">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-[#143D2A] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-16 sm:pt-20 pb-8 sm:pb-10 relative z-10">
        {/* Main footer content */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-5 mb-10 sm:mb-16">
          {/* Brand section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src="/E&BLogo.svg"
                alt="Elite & Beyond logo"
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-[#F5C76A]/70 mb-4 sm:mb-6 leading-relaxed max-w-sm text-sm sm:text-base">
              Premium cocopeat manufacturer and exporter, committed to sustainable agriculture 
              and quality products for growers worldwide.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:+916380001916" className="flex items-center gap-2 sm:gap-3 text-[#F5C76A]/80 hover:text-[#F5C76A] transition-colors text-sm">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+91 63800 01916</span>
              </a>
              <a href="mailto:eliteandbeyond@gmail.com" className="flex items-center gap-2 sm:gap-3 text-[#F5C76A]/80 hover:text-[#F5C76A] transition-colors text-sm break-all sm:break-normal">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>eliteandbeyond@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3 text-[#F5C76A]/80 text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>Tirupur, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-[#F7E6B5] mb-4 sm:mb-6 text-sm sm:text-lg">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#F5C76A]/70 hover:text-[#F5C76A] transition-colors hover-underline inline-block text-xs sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-[#F7E6B5] mb-4 sm:mb-6 text-sm sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#F5C76A]/70 hover:text-[#F5C76A] transition-colors hover-underline inline-block text-xs sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Hidden on smallest screens */}
          <div className="hidden sm:block">
            <h3 className="font-bold text-[#F7E6B5] mb-4 sm:mb-6 text-sm sm:text-lg">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#F5C76A]/70 hover:text-[#F5C76A] transition-colors hover-underline inline-block text-xs sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="bg-gradient-to-r from-[#1B4D33] to-[#143D2A] rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-8 sm:mb-12 border border-[#F5C76A]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-[#F7E6B5] mb-1 sm:mb-2">Stay Updated</h3>
              <p className="text-[#F5C76A]/70 text-sm sm:text-base">Get the latest news about our products and export updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#0E2C19]/50 border border-[#F5C76A]/20 text-[#F7E6B5] placeholder-[#F5C76A]/40 focus:outline-none focus:border-[#F5C76A] text-sm sm:text-base"
              />
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#F5C76A] text-[#0E2C19] font-bold rounded-lg sm:rounded-xl hover:bg-[#F7E6B5] transition-colors whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#F5C76A]/10">
          {/* Social icons - Centered on mobile */}
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 order-2 md:order-none">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5C76A]/10 hover:bg-[#F5C76A] rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C76A] group-hover:text-[#0E2C19] transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright and back to top row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center sm:text-left order-2 sm:order-none">
              <p className="text-[#F5C76A]/60 text-xs sm:text-sm">
                © {new Date().getFullYear()} Elite and Beyond. All rights reserved.
              </p>
              <p className="text-[#F5C76A]/40 text-xs mt-0.5 sm:mt-1">
                Premium Cocopeat Manufacturer & Exporter
              </p>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#F5C76A]/60 hover:text-[#F5C76A] transition-colors group order-1 sm:order-none"
            >
              <span className="text-xs sm:text-sm">Back to top</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F5C76A]/10 group-hover:bg-[#F5C76A] rounded-full flex items-center justify-center transition-all duration-300">
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C76A] group-hover:text-[#0E2C19] transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
