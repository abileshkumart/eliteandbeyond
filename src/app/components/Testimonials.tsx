'use client';

import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      name: "Renee Wells",
      title: "Product Designer, Quotient"
    },
    {
      quote: "Elite and Beyond transformed how we grow. The cocopeat quality is unmatched.",
      name: "Marcus Lee",
      title: "Organic Farmer, GreenFields"
    },
    {
      quote: "The team truly cares about sustainability and it shows in their products.",
      name: "Priya Sharma",
      title: "Horticulturist, Bloom Gardens"
    },
    {
      quote: "Excellent moisture retention and very eco-friendly. Highly recommended!",
      name: "John Taylor",
      title: "Nursery Owner, GrowMore"
    }
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  })

  return (
    <section id="testimonials" className="bg-[#1B4D33] text-[#F5C76A] py-16 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Don’t Just Take Our Word for It</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Hear from some of our amazing customers.
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto" data-aos="fade-up">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[#F5C76A] text-[#0E2C19] p-6 rounded-lg shadow-md"
          >
            <p className="italic text-lg mb-4">“{testimonial.quote}”</p>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-[#0E2C19]/80">{testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
