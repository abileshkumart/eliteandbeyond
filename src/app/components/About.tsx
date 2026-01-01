'use client';
import { CheckCircle, Leaf, Globe, Award } from 'lucide-react';

const highlights = [
    { icon: Leaf, text: 'Sustainable Sourcing' },
    { icon: Globe, text: 'Global Export Network' },
    { icon: Award, text: 'Premium Quality Certified' },
];

export default function About() {
    return (
        <section id="about-us" className="relative bg-gradient-to-br from-[#123822] via-[#16442B] to-[#123822] text-[#F5C76A] py-24 px-6 sm:px-8 md:px-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                <div className="max-w-xl" data-aos="fade-right" data-aos-duration="1000">
                    {/* Section label */}
                    <div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-[#F5C76A] rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium uppercase tracking-wider">About Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">Our Roots,</span>
                        <br />
                        <span className="text-[#FBF0D3]">Our Mission</span>
                    </h2>

                    <p className="text-[#F5C76A]/80 text-lg leading-relaxed mb-8">
                        Elite and Beyond is a forward-thinking manufacturer specializing in premium
                        cocopeat products. Our mission is to provide sustainable, high-quality
                        growing mediums that support eco-conscious agricultural practices around
                        the world.
                    </p>

                    {/* Highlights */}
                    <div className="space-y-4 mb-8">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="flex items-center gap-4 bg-[#0E2C19]/50 rounded-xl p-4 border border-[#F5C76A]/10 hover:border-[#F5C76A]/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-[#F5C76A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-[#F5C76A]" />
                                    </div>
                                    <span className="font-semibold text-[#FBF0D3]">{item.text}</span>
                                    <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                                </div>
                            );
                        })}
                    </div>

                    <a 
                        href="#contact-us"
                        className="inline-flex items-center gap-2 bg-[#F5C76A] text-[#0E2C19] px-8 py-4 rounded-full font-bold hover:bg-[#F9E1A6] transition-all duration-300"
                    >
                        Partner With Us
                    </a>
                </div>

                <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
                    <div className="relative">
                        {/* Decorative frame */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#F5C76A]/20 to-transparent rounded-3xl"></div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-[#F5C76A]/10 to-transparent rounded-2xl"></div>
                        <img 
                            src="/Aboutus.png" 
                            alt="Elite and Beyond - Sustainable Cocopeat Farming" 
                            className="relative object-contain w-full h-auto rounded-2xl shadow-2xl" 
                        />
                        
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-[#F5C76A] text-[#0E2C19] px-6 py-4 rounded-2xl shadow-xl">
                            <p className="text-3xl font-bold">10+</p>
                            <p className="text-sm font-medium">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visionary Mission Section */}
            <div className="max-w-5xl mx-auto mt-24 relative z-10" data-aos="fade-up" data-aos-duration="1000">
                <div className="bg-[#0E2C19]/60 backdrop-blur-sm border border-[#F5C76A]/20 rounded-3xl p-10 md:p-14 text-center">
                    {/* Mission label */}
                    <div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-5 py-2.5 mb-8">
                        <span className="w-2 h-2 bg-[#F5C76A] rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium uppercase tracking-wider text-[#F5C76A]">Our Vision</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">
                            Visionary Mission
                        </span>
                    </h3>

                    <p className="text-[#FBF0D3] text-lg md:text-xl leading-relaxed mb-6">
                        At Elite & Beyond, we aspire to lead a global shift toward harmonious innovation — creating purpose-driven, high-quality products that unite human well-being with environmental regeneration.
                    </p>

                    <p className="text-[#F5C76A]/80 text-lg md:text-xl leading-relaxed">
                        Guided by trust, purity, and sustainability, we strive to empower people, nurture ecosystems, and craft a future where progress and nature thrive together — for generations to come.
                    </p>

                    {/* Decorative elements */}
                    <div className="flex justify-center gap-6 mt-10">
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-[#F5C76A]/10 rounded-full flex items-center justify-center mb-3">
                                <Leaf className="w-7 h-7 text-[#F5C76A]" />
                            </div>
                            <span className="text-sm text-[#F5C76A]/70">Trust</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-[#F5C76A]/10 rounded-full flex items-center justify-center mb-3">
                                <Award className="w-7 h-7 text-[#F5C76A]" />
                            </div>
                            <span className="text-sm text-[#F5C76A]/70">Purity</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-[#F5C76A]/10 rounded-full flex items-center justify-center mb-3">
                                <Globe className="w-7 h-7 text-[#F5C76A]" />
                            </div>
                            <span className="text-sm text-[#F5C76A]/70">Sustainability</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
