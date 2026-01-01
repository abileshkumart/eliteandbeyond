// app/page.tsx
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Products from "./components/Product";
import Benefits from "./components/Benfits";
import Process from "./components/Process";
import UseCases from "./components/Usecase";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Process />
      <UseCases />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
