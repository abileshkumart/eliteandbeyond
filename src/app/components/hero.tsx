'use client';
import { ArrowRight, Leaf, Award, Globe } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative bg-gradient-to-br from-[#0E2C19] via-[#123822] to-[#0E2C19] text-[#F5C76A] min-h-[95vh] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-16 lg:px-24 py-12 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#16442B]/30 rounded-full blur-3xl"></div>
            </div>

            <div className="sm:w-1/2 mb-8 sm:mb-0 relative z-10 text-center sm:text-left" data-aos="fade-right" data-aos-duration="1200">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-4 py-2 mb-6">
                    <Leaf className="w-4 h-4 text-[#F5C76A]" />
                    <span className="text-sm font-medium text-[#F5C76A]">Sustainable Growth Innovations</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">Redefining Growth</span>
                    <br />
                    <span className="text-[#FBF0D3]">in Harmony with Nature</span>
                </h1>
                
                <p className="text-lg sm:text-xl mb-4 text-[#F5C76A]/90 max-w-lg leading-relaxed">
                    At Elite & Beyond, we craft nature's finest into world-class products that power sustainable growth — from soil to society.
                </p>
                <p className="text-base sm:text-lg mb-8 text-[#F5C76A]/70 max-w-lg leading-relaxed">
                    Built on purity, innovation, and trust, our solutions serve global industries seeking natural excellence.
                    <span className="block mt-2 italic text-[#F9E1A6]">"Naturally inspired. Globally admired."</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center sm:justify-start">
                    <a 
                        href="#products"
                        className="group flex items-center justify-center gap-2 bg-[#F5C76A] text-[#0E2C19] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F9E1A6] transition-all duration-300"
                    >
                        Explore Products
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                        href="#contact-us"
                        className="flex items-center justify-center gap-2 border-2 border-[#F5C76A] text-[#F5C76A] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5C76A]/10 transition-all duration-300"
                    >
                        Get a Quote
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                            <Globe className="w-5 h-5 text-[#F5C76A]/60" />
                            <span className="text-2xl sm:text-3xl font-bold text-[#FBF0D3]">20+</span>
                        </div>
                        <p className="text-sm text-[#F5C76A]/60">Countries Served</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                            <Award className="w-5 h-5 text-[#F5C76A]/60" />
                            <span className="text-2xl sm:text-3xl font-bold text-[#FBF0D3]">100%</span>
                        </div>
                        <p className="text-sm text-[#F5C76A]/60">Organic Quality</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                            <Leaf className="w-5 h-5 text-[#F5C76A]/60" />
                            <span className="text-2xl sm:text-3xl font-bold text-[#FBF0D3]">5K+</span>
                        </div>
                        <p className="text-sm text-[#F5C76A]/60">Tons Exported</p>
                    </div>
                </div>
            </div>

            <div className="sm:w-1/2 flex justify-center relative z-10" data-aos="fade-left" data-aos-duration="1200">
                <div className="relative">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-[#F5C76A]/20 blur-3xl rounded-full scale-75"></div>
                    <img 
                        src="/hero-plant.png" 
                        alt="Premium Cocopeat Plant" 
                        className="relative max-h-[600px] sm:max-h-[600px] w-auto float drop-shadow-2xl" 
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-[#F5C76A]/60 uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 border-2 border-[#F5C76A]/40 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-[#F5C76A] rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
