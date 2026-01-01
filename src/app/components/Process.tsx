'use client';
import { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  Layers,
  Package,
  SendHorizonal,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

const steps = [
  {
    title: 'Sourcing',
    subtitle: 'Coconut Husks',
    description:
      'We source premium coconut husks from sustainable farms across South India.',
    icon: Leaf,
    details: ['100% Natural', 'Farm Fresh', 'Quality Checked'],
  },
  {
    title: 'Processing',
    subtitle: 'Extract & Refine',
    description:
      'Advanced processing to extract pure cocopeat fiber with optimal characteristics.',
    icon: Layers,
    details: ['Machine Processed', 'Washed & Buffered', 'Low EC Levels'],
  },
  {
    title: 'Packaging',
    subtitle: 'Compress & Pack',
    description:
      'Carefully compressed and packed in various formats to suit your needs.',
    icon: Package,
    details: ['Multiple Sizes', 'Export Ready', 'Moisture Sealed'],
  },
  {
    title: 'Delivery',
    subtitle: 'Global Shipping',
    description:
      'Fast and reliable shipping to customers in over 20 countries worldwide.',
    icon: SendHorizonal,
    details: ['Container Loads', 'On-Time Delivery', 'Tracking Available'],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsInView(true);
            setHasAnimated(true);
            // Start step-by-step animation with smoother timing
            steps.forEach((_, index) => {
              setTimeout(() => {
                setActiveStep(index);
              }, index * 900); // Slower timing between steps
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="our-process" 
      className="relative bg-gradient-to-b from-[#FBF0D3] via-white to-[#FBF0D3] py-24 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#16442B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F5C76A]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#16442B]/10 border border-[#16442B]/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#16442B] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium uppercase tracking-wider text-[#16442B]">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E2C19] mb-6">
            From <span className="text-[#16442B]">Husk</span> to <span className="text-[#16442B]">Harvest</span>
          </h2>
          <p className="text-lg text-[#0E2C19]/70 max-w-3xl mx-auto">
            Our meticulous 4-step process ensures every batch of cocopeat meets
            the highest international quality standards.
          </p>
        </div>

        {/* Process steps - Timeline style */}
        <div className="relative">
          {/* Animated connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 bg-[#16442B]/10 transform -translate-y-1/2 rounded-full overflow-hidden">
            {/* Background glow effect */}
            <div 
              className="absolute inset-0 bg-[#F5C76A]/20 blur-sm transition-all ease-out"
              style={{ 
                width: isInView ? `${((activeStep + 1) / steps.length) * 100}%` : '0%',
                transitionDuration: '1.5s',
              }}
            />
            {/* Main progress line */}
            <div 
              className="h-full bg-gradient-to-r from-[#16442B] via-[#F5C76A] to-[#16442B] rounded-full transition-all ease-out relative"
              style={{ 
                width: isInView ? `${((activeStep + 1) / steps.length) * 100}%` : '0%',
                transitionDuration: '1.2s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Animated shine effect on the line */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div 
                  className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
                  style={{ animationDuration: '2s' }}
                />
              </div>
            </div>
          </div>

          {/* Mobile: Vertical timeline line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-[#16442B]/10 rounded-full overflow-hidden">
            {/* Background glow */}
            <div 
              className="w-full bg-[#F5C76A]/20 blur-sm transition-all ease-out"
              style={{ 
                height: isInView ? `${((activeStep + 1) / steps.length) * 100}%` : '0%',
                transitionDuration: '1.5s',
              }}
            />
            {/* Main progress line */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#16442B] via-[#F5C76A] to-[#16442B] rounded-full transition-all ease-out"
              style={{ 
                height: isInView ? `${((activeStep + 1) / steps.length) * 100}%` : '0%',
                transitionDuration: '1.2s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isCurrent = index === activeStep;
              
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    isActive 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step card */}
                  <div 
                    className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 border-2 relative z-10 ${
                      isCurrent 
                        ? 'border-[#F5C76A] shadow-2xl shadow-[#F5C76A]/20 scale-105' 
                        : isActive 
                          ? 'border-[#16442B]/20 hover:shadow-2xl hover:border-[#F5C76A]/50' 
                          : 'border-[#16442B]/10'
                    }`}
                  >
                    {/* Animated glow effect for current step */}
                    {isCurrent && (
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F5C76A]/20 via-transparent to-[#F5C76A]/20 animate-pulse" />
                    )}

                    {/* Step number with icon */}
                    <div className="flex items-center gap-4 mb-6 relative">
                      <div 
                        className={`w-14 h-14 font-bold rounded-2xl flex items-center justify-center text-xl shadow-lg transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-br from-[#0E2C19] to-[#16442B] text-[#F5C76A]' 
                            : 'bg-gray-200 text-gray-400'
                        } ${isCurrent ? 'animate-bounce' : 'group-hover:scale-110'}`}
                      >
                        {isActive ? (
                          <span className="flex items-center justify-center">
                            {index + 1}
                          </span>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <Icon 
                        className={`w-8 h-8 transition-all duration-500 ${
                          isActive ? 'text-[#16442B] opacity-100' : 'text-gray-300 opacity-60'
                        }`} 
                      />
                      
                      {/* Completion checkmark */}
                      {isActive && index < activeStep && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <p 
                      className={`text-xs font-semibold uppercase tracking-wider mb-1 inline-block px-3 py-1 rounded-full transition-all duration-500 ${
                        isActive 
                          ? 'text-[#F5C76A] bg-[#0E2C19]' 
                          : 'text-gray-400 bg-gray-100'
                      }`}
                    >
                      {step.subtitle}
                    </p>
                    <h3 
                      className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                        isActive ? 'text-[#0E2C19]' : 'text-gray-300'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`mb-6 leading-relaxed transition-colors duration-500 ${
                        isActive ? 'text-[#0E2C19]/70' : 'text-gray-300'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Details list with staggered animation */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-2 text-sm transition-all duration-500 ${
                            isActive ? 'text-[#16442B] opacity-100' : 'text-gray-300 opacity-50'
                          }`}
                          style={{ 
                            transitionDelay: isActive ? `${idx * 100 + 300}ms` : '0ms',
                            transform: isActive ? 'translateX(0)' : 'translateX(-10px)'
                          }}
                        >
                          <CheckCircle 
                            className={`w-4 h-4 transition-colors duration-500 ${
                              isActive ? 'text-green-500' : 'text-gray-300'
                            }`} 
                          />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div 
                      className={`hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 transition-all duration-500 ${
                        index < activeStep ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                    >
                      <div className="w-8 h-8 bg-[#F5C76A] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <ChevronRight className="w-5 h-5 text-[#0E2C19]" />
                      </div>
                    </div>
                  )}

                  {/* Mobile: Step connector dot */}
                  <div 
                    className={`lg:hidden absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#F5C76A] border-[#16442B]' 
                        : 'bg-white border-gray-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality assurance badge */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0E2C19] to-[#16442B] text-[#F5C76A] px-8 py-5 rounded-2xl shadow-xl">
            <div className="w-12 h-12 bg-[#F5C76A]/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Quality Guaranteed</p>
              <p className="text-sm text-[#F5C76A]/80">ISO certified process with strict quality control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
