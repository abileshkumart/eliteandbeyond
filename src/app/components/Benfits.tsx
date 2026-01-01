// app/components/Benefits.tsx
'use client';
import { useState } from 'react';
import { Droplet, Wind, Leaf, Sliders, Recycle, ThumbsUp, X, CheckCircle, Lightbulb, TrendingUp, Beaker } from 'lucide-react';

const benefits = [
    {
        title: 'Superior Water Retention',
        description: 'Holds up to 10x its weight in water, reducing irrigation frequency by up to 50%.',
        icon: Droplet,
        color: 'from-blue-500/20 to-blue-600/10',
        iconColor: 'text-blue-400',
        bgColor: 'bg-blue-500',
        detailedInfo: {
            headline: 'Save Water, Save Money',
            explanation: 'Cocopeat\'s unique fibrous structure creates millions of tiny air pockets that trap and hold water molecules. This natural sponge-like property means your plants have consistent access to moisture.',
            stats: [
                { label: 'Water Holding Capacity', value: '8-10x its dry weight' },
                { label: 'Irrigation Reduction', value: 'Up to 50%' },
                { label: 'Moisture Release', value: 'Slow & consistent' }
            ],
            practicalTips: [
                'Soak cocopeat blocks for 30 minutes before first use',
                'Mix with perlite (70:30) for hanging baskets',
                'Water deeply but less frequently for best results',
                'Check moisture at 2-inch depth before watering again'
            ],
            realWorldExample: 'A tomato greenhouse in Tamil Nadu reduced water usage by 45% after switching from soil to cocopeat, saving ₹2.5 lakhs annually on irrigation costs.',
            bestFor: ['Vegetables', 'Tropical plants', 'Seedlings', 'Container gardens']
        }
    },
    {
        title: 'Excellent Aeration',
        description: 'Promotes healthy root development with optimal air-to-water ratio for plant growth.',
        icon: Wind,
        color: 'from-cyan-500/20 to-cyan-600/10',
        iconColor: 'text-cyan-400',
        bgColor: 'bg-cyan-500',
        detailedInfo: {
            headline: 'Roots Need to Breathe',
            explanation: 'Unlike dense soil that can compact and suffocate roots, cocopeat maintains its light, fluffy structure. The natural porosity ensures roots receive optimal oxygen levels for nutrient uptake and growth.',
            stats: [
                { label: 'Air-Filled Porosity', value: '10-20%' },
                { label: 'Root Growth Rate', value: '30% faster' },
                { label: 'Compaction Resistance', value: 'Excellent' }
            ],
            practicalTips: [
                'Don\'t over-compress when potting - keep it fluffy',
                'Add 20% perlite for plants needing extra drainage',
                'Ideal for root vegetables like carrots and radishes',
                'Perfect for hydroponic systems requiring air roots'
            ],
            realWorldExample: 'Orchid growers in Kerala report 40% better bloom rates using cocopeat chips compared to traditional bark media, thanks to improved root aeration.',
            bestFor: ['Orchids', 'Succulents', 'Herbs', 'Hydroponics']
        }
    },
    {
        title: '100% Eco-Friendly',
        description: 'Made from renewable coconut husks. Fully biodegradable and planet-friendly.',
        icon: Leaf,
        color: 'from-green-500/20 to-green-600/10',
        iconColor: 'text-green-400',
        bgColor: 'bg-green-500',
        detailedInfo: {
            headline: 'From Waste to Wonder',
            explanation: 'Coconut husks were once discarded as agricultural waste. Now, this byproduct is transformed into a valuable growing medium, reducing environmental burden while creating sustainable farming solutions.',
            stats: [
                { label: 'Biodegradability', value: '100%' },
                { label: 'Carbon Footprint', value: '70% lower than peat' },
                { label: 'Renewable Cycle', value: '60-70 days' }
            ],
            practicalTips: [
                'After use, add spent cocopeat to compost piles',
                'Mix old cocopeat into garden soil as amendment',
                'Choose washed/buffered products for best results',
                'Look for certifications like RHP or OMRI organic'
            ],
            realWorldExample: 'India processes over 15 billion coconuts annually. Converting just 30% of husk waste to cocopeat prevents 4.5 million tons of agricultural waste from entering landfills.',
            bestFor: ['Organic farming', 'Sustainable gardens', 'Eco-conscious growers', 'Export markets']
        }
    },
    {
        title: 'pH Neutral',
        description: 'Naturally balanced pH (5.5-6.5) works perfectly with all plant varieties.',
        icon: Sliders,
        color: 'from-purple-500/20 to-purple-600/10',
        iconColor: 'text-purple-400',
        bgColor: 'bg-purple-500',
        detailedInfo: {
            headline: 'The Perfect Growing Balance',
            explanation: 'Most plants thrive in slightly acidic conditions (pH 5.5-6.8). Cocopeat naturally falls within this range, eliminating the need for pH adjustments and ensuring optimal nutrient availability.',
            stats: [
                { label: 'Natural pH Range', value: '5.5 - 6.8' },
                { label: 'EC Level (Washed)', value: '< 0.5 mS/cm' },
                { label: 'Buffering Capacity', value: 'Moderate' }
            ],
            practicalTips: [
                'Test pH monthly with a digital meter for precision',
                'Use buffered cocopeat for salt-sensitive plants',
                'Flush with plain water every 2-3 weeks',
                'Calcium/magnesium supplements recommended for coco'
            ],
            realWorldExample: 'Strawberry farms in Ooty switched to low-EC cocopeat and saw fruit sweetness (Brix levels) increase by 15% due to better nutrient uptake at optimal pH.',
            bestFor: ['Strawberries', 'Blueberries', 'Cannabis', 'Most vegetables']
        }
    },
    {
        title: 'Reusable Material',
        description: 'Can be reused for multiple growing cycles, maximizing your investment.',
        icon: Recycle,
        color: 'from-amber-500/20 to-amber-600/10',
        iconColor: 'text-amber-400',
        bgColor: 'bg-amber-500',
        detailedInfo: {
            headline: 'Grow More, Spend Less',
            explanation: 'Unlike peat moss that degrades quickly, cocopeat maintains its structure for 3-5 years. With proper care, you can reuse the same cocopeat for multiple growing seasons.',
            stats: [
                { label: 'Usable Lifespan', value: '3-5 years' },
                { label: 'Growing Cycles', value: '4-6 per batch' },
                { label: 'Cost Savings', value: 'Up to 60%' }
            ],
            practicalTips: [
                'After harvest, remove old roots and sterilize with steam',
                'Re-buffer used cocopeat by soaking in calcium nitrate solution',
                'Mix 30% fresh cocopeat with 70% reused for best results',
                'Store dry, unused cocopeat in sealed bags for years'
            ],
            realWorldExample: 'A rose farm in Bangalore reuses their cocopeat for 4 growing cycles, reducing their annual substrate cost from ₹8 lakhs to ₹3 lakhs.',
            bestFor: ['Commercial growers', 'Budget-conscious gardens', 'Large-scale operations', 'Nurseries']
        }
    },
    {
        title: 'Disease Resistant',
        description: 'Natural anti-fungal properties reduce plant diseases and pest problems.',
        icon: ThumbsUp,
        color: 'from-rose-500/20 to-rose-600/10',
        iconColor: 'text-rose-400',
        bgColor: 'bg-rose-500',
        detailedInfo: {
            headline: 'Natural Plant Protection',
            explanation: 'Cocopeat contains natural compounds called lignins and tannins that inhibit fungal growth. Its sterile nature (when properly processed) eliminates soil-borne pathogens common in traditional growing media.',
            stats: [
                { label: 'Fungal Disease Reduction', value: '60-80%' },
                { label: 'Weed Seeds', value: 'Zero (sterile)' },
                { label: 'Beneficial Microbes', value: 'Supports growth' }
            ],
            practicalTips: [
                'Always use fresh cocopeat for seed starting',
                'Add Trichoderma beneficial fungi for extra protection',
                'Avoid overwatering to prevent any fungal issues',
                'Combine with neem cake for natural pest deterrence'
            ],
            realWorldExample: 'Cucumber growers in Maharashtra reported 70% reduction in damping-off disease after switching from soil to sterilized cocopeat for seedling production.',
            bestFor: ['Seedlings', 'Microgreens', 'Sensitive crops', 'Indoor gardens']
        }
    },
];

export default function Benefits() {
    const [selectedBenefit, setSelectedBenefit] = useState<typeof benefits[0] | null>(null);

    return (
        <section className="relative bg-gradient-to-br from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] text-[#0E2C19] py-24 px-6 sm:px-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjMEUyQzE5IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-[#0E2C19]/10 border border-[#0E2C19]/20 rounded-full px-4 py-2 mb-6">
                        <Leaf className="w-4 h-4 text-[#16442B]" />
                        <span className="text-sm font-medium uppercase tracking-wider text-[#0E2C19]">Why Cocopeat</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E2C19] mb-6">
                        The Smart Choice for
                        <br />
                        <span className="text-[#16442B]">Modern Agriculture</span>
                    </h2>
                    <p className="text-lg text-[#0E2C19]/70 max-w-3xl mx-auto">
                        Discover why farmers and gardeners worldwide are switching to cocopeat 
                        for superior plant growth and sustainable farming.
                    </p>
                </div>

                {/* Benefits grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div 
                                key={index} 
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-white/50 cursor-pointer"
                                onClick={() => setSelectedBenefit(benefit)}
                            >
                                {/* Icon with gradient background */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-8 h-8 ${benefit.iconColor}`} />
                                </div>

                                <h3 className="text-xl font-bold text-[#0E2C19] mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#0E2C19]/70 leading-relaxed">
                                    {benefit.description}
                                </p>

                                {/* Hover indicator */}
                                <div className="mt-6 pt-4 border-t border-[#0E2C19]/10">
                                    <span className="text-sm font-medium text-[#16442B] group-hover:text-[#0E2C19] transition-colors flex items-center gap-2">
                                        <Lightbulb className="w-4 h-4" />
                                        Click to learn more →
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-4 bg-[#0E2C19] text-[#F5C76A] px-8 py-4 rounded-full">
                        <span className="font-semibold">Ready to grow sustainably?</span>
                        <a href="#contact-us" className="bg-[#F5C76A] text-[#0E2C19] px-6 py-2 rounded-full font-bold hover:bg-[#F9E1A6] transition-colors">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            {/* Detail Modal - Clean & Modern Design */}
            {selectedBenefit && (
                <div 
                    className="fixed inset-0 bg-[#0E2C19]/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in"
                    onClick={() => setSelectedBenefit(null)}
                >
                    <div 
                        className="bg-[#FBF0D3] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in border border-[#F5C76A]/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header - Clean Green Header */}
                        <div className="bg-gradient-to-r from-[#0E2C19] to-[#16442B] p-4 sm:p-6 relative">
                            <button
                                onClick={() => setSelectedBenefit(null)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-[#F5C76A] hover:bg-[#F9E1A6] rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
                            >
                                <X className="w-4 h-4 text-[#0E2C19]" />
                            </button>
                            
                            <div className="flex items-center gap-3 sm:gap-4 pr-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F5C76A] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                    <selectedBenefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0E2C19]" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F5C76A] truncate">{selectedBenefit.title}</h3>
                                    <p className="text-[#FBF0D3]/80 text-xs sm:text-sm line-clamp-1">{selectedBenefit.detailedInfo.headline}</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)] sm:max-h-[calc(90vh-100px)] custom-scrollbar">
                            {/* Key Stats - Responsive Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                {selectedBenefit.detailedInfo.stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-[#16442B]/10">
                                        <p className="text-base sm:text-lg md:text-xl font-bold text-[#16442B] break-words">{stat.value}</p>
                                        <p className="text-xs text-[#0E2C19]/60 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* How It Works */}
                            <div className="bg-white rounded-xl p-4 sm:p-5 mb-4 sm:mb-5 shadow-sm border border-[#16442B]/10">
                                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#16442B] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Beaker className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5C76A]" />
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-[#0E2C19]">How It Works</h4>
                                </div>
                                <p className="text-[#0E2C19]/70 leading-relaxed text-xs sm:text-sm">
                                    {selectedBenefit.detailedInfo.explanation}
                                </p>
                            </div>

                            {/* Practical Tips - Responsive Grid */}
                            <div className="bg-white rounded-xl p-4 sm:p-5 mb-4 sm:mb-5 shadow-sm border border-[#16442B]/10">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F5C76A] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0E2C19]" />
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-[#0E2C19]">Pro Tips</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {selectedBenefit.detailedInfo.practicalTips.map((tip, idx) => (
                                        <div key={idx} className="flex items-start gap-2 bg-[#16442B]/5 rounded-lg p-2.5 sm:p-3">
                                            <CheckCircle className="w-4 h-4 text-[#16442B] flex-shrink-0 mt-0.5" />
                                            <span className="text-[#0E2C19]/80 text-xs sm:text-sm leading-snug">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Success Story - Highlighted Section */}
                            <div className="bg-[#16442B] rounded-xl p-4 sm:p-5 mb-4 sm:mb-5">
                                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F5C76A] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0E2C19]" />
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-[#F5C76A]">Success Story</h4>
                                </div>
                                <p className="text-[#FBF0D3] leading-relaxed text-xs sm:text-sm">
                                    {selectedBenefit.detailedInfo.realWorldExample}
                                </p>
                            </div>

                            {/* Best For Tags */}
                            <div className="mb-4 sm:mb-5">
                                <p className="text-xs sm:text-sm font-semibold text-[#0E2C19]/60 mb-2 sm:mb-3 uppercase tracking-wide">Ideal For</p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {selectedBenefit.detailedInfo.bestFor.map((item, idx) => (
                                        <span 
                                            key={idx}
                                            className="bg-[#0E2C19] text-[#F5C76A] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[#0E2C19]/10">
                                <a 
                                    href="#contact-us"
                                    className="flex-1 bg-[#16442B] text-[#F5C76A] py-2.5 sm:py-3 rounded-xl font-bold text-center hover:bg-[#0E2C19] transition-colors text-xs sm:text-sm shadow-lg"
                                    onClick={() => setSelectedBenefit(null)}
                                >
                                    Get Started Today
                                </a>
                                <button 
                                    onClick={() => setSelectedBenefit(null)}
                                    className="flex-1 bg-white border border-[#16442B]/20 text-[#0E2C19] py-2.5 sm:py-3 rounded-xl font-bold hover:bg-[#16442B]/5 transition-colors text-xs sm:text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}


