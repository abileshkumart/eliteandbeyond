'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Elite and Beyond transformed how we grow. The cocopeat quality is unmatched and has significantly improved our crop yields.",
    name: "Marcus Lee",
    title: "Organic Farmer",
    company: "GreenFields Agriculture",
    rating: 5,
    image: null,
  },
  {
    quote: "The team truly cares about sustainability and it shows in their products. Best cocopeat supplier we've worked with.",
    name: "Priya Sharma",
    title: "Head Horticulturist",
    company: "Bloom Gardens",
    rating: 5,
    image: null,
  },
  {
    quote: "Excellent moisture retention and very eco-friendly. Our greenhouse productivity increased by 40% since switching.",
    name: "John Taylor",
    title: "Nursery Owner",
    company: "GrowMore Nurseries",
    rating: 5,
    image: null,
  },
  {
    quote: "Love the consistency in quality and the prompt customer support. We can't imagine working without Elite and Beyond.",
    name: "Renee Wells",
    title: "Operations Manager",
    company: "Quotient Farms",
    rating: 5,
    image: null,
  },
  {
    quote: "The low EC cocopeat is perfect for our hydroponic setup. Fast shipping and excellent packaging every time.",
    name: "Ahmed Hassan",
    title: "Hydroponics Expert",
    company: "Dubai Green Solutions",
    rating: 5,
    image: null,
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-[#0E2C19] via-[#143D2A] to-[#0E2C19] text-[#F5C76A] py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 fill-[#F5C76A]" />
            <span className="text-sm font-medium uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#F7E6B5]">Trusted by</span>{' '}
            <span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">Growers Worldwide</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#F5C76A]/80">
            Don't just take our word for it — hear from farmers and businesses who trust Elite and Beyond.
          </p>
        </div>

        {/* Slider container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="keen-slider__slide"
              >
                <div className="bg-gradient-to-br from-[#1B4D33] to-[#143D2A] p-8 rounded-3xl border border-[#F5C76A]/10 hover:border-[#F5C76A]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-[#F5C76A]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-[#F5C76A]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F5C76A] text-[#F5C76A]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#F7E6B5] text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-[#F5C76A]/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F5C76A] to-[#F7E6B5] rounded-full flex items-center justify-center text-[#0E2C19] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#F7E6B5]">{testimonial.name}</p>
                      <p className="text-sm text-[#F5C76A]/70">{testimonial.title}</p>
                      <p className="text-xs text-[#F5C76A]/50">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-[#F5C76A] text-[#0E2C19] rounded-full flex items-center justify-center shadow-lg hover:bg-[#F7E6B5] transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-[#F5C76A] text-[#0E2C19] rounded-full flex items-center justify-center shadow-lg hover:bg-[#F7E6B5] transition-colors z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(instanceRef.current.track.details.slides.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'bg-[#F5C76A] w-8' : 'bg-[#F5C76A]/30 hover:bg-[#F5C76A]/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Trust badge */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-[#F5C76A]/60 mb-4">Trusted by 500+ businesses in 20+ countries</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {['🇮🇳 India', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇳🇱 Netherlands', '🇺🇸 USA'].map((country, idx) => (
              <span key={idx} className="text-[#F7E6B5]/80 text-sm font-medium">{country}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
