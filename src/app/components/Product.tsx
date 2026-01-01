'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Package, Truck, Shield, X, Check, Info, Droplets, Ruler, Weight, Layers, Leaf } from 'lucide-react';

// Detailed product data from the brochure
const products = [
    {
        id: 1,
        name: "5 Kg Cocopeat Block",
        useCase: "Soil Conditioning & Horticulture",
        description: "Compressed blocks that expand to 70-75L after hydration. Perfect for large-scale farming operations.",
        image: "/cocopeat.png",
        features: ["High Expansion Ratio", "Long Shelf Life", "Easy Storage"],
        specs: {
            form: "Compressed block (30 × 30 × 12 cm)",
            weight: "5 ± 0.2 kg",
            ec: "< 1.2 mS/cm",
            ph: "5.5 - 6.8",
            moisture: "8 - 15%",
            expansionVolume: "70 - 75L after hydration",
            particleSize: "Fine",
            packaging: "Stretch-wrapped / Palletized",
            applications: ["Potting media", "Hydroponics", "Seed germination", "Mushroom cultivation"]
        }
    },
    {
        id: 2,
        name: "120kg Coir Bale",
        useCase: "Commercial Farming",
        description: "Hydraulic compressed bales for industrial-scale agricultural operations and large nurseries.",
        image: "/cocopetvermiccompost.png",
        features: ["High Compression", "Export Ready", "Bulk Orders"],
        specs: {
            weight: "120 kg (± 2 kg)",
            compression: "Hydraulic compressed",
            compressionRatio: "5:1",
            dimensions: "24 × 30 × 48 inches (approx)",
            fibreType: "Machine-extracted brown coir fibre",
            fibreLength: "10 - 30 cm (customizable)",
            impurities: "< 3%",
            moisture: "15% (export standard)",
            colour: "Natural golden-brown",
            binding: "PP strap binding (4-6 straps)"
        }
    },
    {
        id: 3,
        name: "Coconut Chips",
        useCase: "Hydroponics & Orchids",
        description: "100% natural coconut husk chips available in multiple sizes for optimal drainage and aeration.",
        image: "/cocopeatbrick.png",
        features: ["Multiple Sizes", "Low EC Options", "Excellent Drainage"],
        specs: {
            material: "100% natural coconut husk chips",
            sizeOptions: ["4-8 mm (Small chips)", "8-15 mm (Medium chips)", "15-20 mm (Large chips)"],
            format: "Loose / 5kg blocks / 25kg bags / 50kg bags",
            moisture: "10-15%",
            ecLevels: ["Low EC (<0.5 mS/cm) - Washed", "High EC (>1.0 mS/cm) - Unwashed"],
            ph: "5.5 - 6.5",
            impurities: "< 2%"
        }
    },
    {
        id: 4,
        name: "Cold Pressed Coconut Oil",
        useCase: "Food & Wellness",
        description: "Sulphur-free, solar dried virgin coconut oil with natural antioxidants and authentic aroma.",
        image: "/cocopeat.png",
        features: ["Sulphur Free", "Cold Pressed", "Natural Aroma"],
        specs: {
            type: "Cold-Pressed Virgin Coconut Oil",
            dryingMethod: "Solar Dried (No Sulphur, No Smoke)",
            aroma: "Natural, fresh coconut fragrance",
            color: "Crystal clear, golden",
            acidity: "< 0.2%",
            moisture: "< 0.1%",
            peroxideValue: "< 3 meq/kg",
            preserves: ["Natural antioxidants", "Lauric acid content", "Nutritional purity", "Authentic coconut aroma"]
        }
    },
    {
        id: 5,
        name: "Sulphur Free Copra",
        useCase: "Edible & Export",
        description: "Premium edible copra, solar dried without chemicals. High oil content with fresh coconut smell.",
        image: "/cocopeatbrick.png",
        features: ["Chemical Free", "High Oil Content", "Export Quality"],
        specs: {
            type: "Edible Copra",
            dryingMethod: "Solar Dried - Chemical Free",
            moisture: "< 5%",
            oilContent: "62-65%",
            ffas: "< 0.5%",
            impurities: "< 1%",
            colour: "Natural cream - golden",
            aroma: "Fresh, clean coconut smell (no smoke, no sulphur)"
        }
    }
];

const badges = [
    { icon: Package, text: "Custom Packaging" },
    { icon: Truck, text: "Global Shipping" },
    { icon: Shield, text: "Quality Assured" },
];

export default function ProductsSection() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

    const closeModal = () => setSelectedProduct(null);

    return (
        <section id="products" className="relative bg-gradient-to-b from-[#16442B] via-[#123822] to-[#16442B] text-[#FBF0D3] py-24 px-6 sm:px-16 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-[#F5C76A] rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium uppercase tracking-wider text-[#F5C76A]">Our Products</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">Crafted for</span>{' '}
                        <span className="text-[#FBF0D3]">Growth</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#FBF0D3]/80 text-lg">
                        Premium cocopeat products designed to enhance growth, improve soil quality, 
                        and support sustainable farming practices worldwide.
                    </p>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 mb-16" data-aos="fade-up" data-aos-delay="100">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <div key={index} className="flex items-center gap-3 bg-[#0E2C19]/50 px-6 py-3 rounded-full border border-[#F5C76A]/20">
                                <Icon className="w-5 h-5 text-[#F5C76A]" />
                                <span className="text-sm font-medium">{badge.text}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Products grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className="group bg-gradient-to-b from-[#0E2C19] to-[#123822] rounded-3xl overflow-hidden border border-[#F5C76A]/10 hover:border-[#F5C76A]/30 card-hover cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                        >
                            {/* Image container */}
                            <div className="relative h-64 bg-gradient-to-b from-[#F5C76A]/5 to-transparent p-6 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[#F5C76A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* View Details indicator */}
                                <div className="absolute top-4 right-4 bg-[#F5C76A]/20 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-xs font-medium text-[#F5C76A] flex items-center gap-1">
                                        <Info className="w-3 h-3" />
                                        View Specs
                                    </span>
                                </div>

                                <div className="relative w-48 h-48">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-xs font-medium text-[#F5C76A] uppercase tracking-wider">{product.useCase}</span>
                                <h3 className="text-2xl font-bold mt-2 mb-3 text-[#FBF0D3]">{product.name}</h3>
                                <p className="text-[#FBF0D3]/70 text-sm mb-4 leading-relaxed">{product.description}</p>
                                
                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.features.map((feature, idx) => (
                                        <span key={idx} className="text-xs bg-[#F5C76A]/10 text-[#F5C76A] px-3 py-1 rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProduct(product);
                                        }}
                                        className="flex-1 flex items-center justify-center gap-2 bg-[#F5C76A]/10 text-[#F5C76A] px-4 py-3 rounded-full font-semibold hover:bg-[#F5C76A]/20 transition-all duration-300"
                                    >
                                        <Info className="w-4 h-4" />
                                        Details
                                    </button>
                                    <a 
                                        href="#contact-us"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex-1 flex items-center justify-center gap-2 border-2 border-[#F5C76A] text-[#F5C76A] px-4 py-3 rounded-full font-semibold hover:bg-[#F5C76A] hover:text-[#0E2C19] transition-all duration-300"
                                    >
                                        Enquire
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16" data-aos="fade-up">
                    <p className="text-[#FBF0D3]/60 mb-4">Need custom specifications?</p>
                    <a 
                        href="#contact-us"
                        className="inline-flex items-center gap-2 text-[#F5C76A] font-semibold hover:text-[#F9E1A6] transition-colors"
                    >
                        Contact us for bulk orders
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div 
                        className="relative bg-gradient-to-br from-[#0E2C19] to-[#16442B] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#F5C76A]/20 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button 
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#F5C76A]/10 hover:bg-[#F5C76A]/20 rounded-full flex items-center justify-center text-[#F5C76A] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="overflow-y-auto max-h-[90vh]">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Left: Image */}
                                <div className="relative bg-gradient-to-br from-[#F5C76A]/10 to-[#F5C76A]/5 p-8 flex items-center justify-center min-h-[300px]">
                                    <div className="relative w-64 h-64">
                                        <Image
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-[#F5C76A]/30 rounded-tl-3xl"></div>
                                    <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-[#F5C76A]/30 rounded-br-3xl"></div>
                                </div>

                                {/* Right: Details */}
                                <div className="p-8">
                                    <span className="inline-block text-xs font-medium text-[#0E2C19] bg-[#F5C76A] px-3 py-1 rounded-full mb-4">
                                        {selectedProduct.useCase}
                                    </span>
                                    <h3 className="text-3xl font-bold text-[#FBF0D3] mb-4">{selectedProduct.name}</h3>
                                    <p className="text-[#FBF0D3]/80 mb-6 leading-relaxed">{selectedProduct.description}</p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProduct.features.map((feature, idx) => (
                                            <span key={idx} className="flex items-center gap-1 text-sm bg-[#F5C76A]/10 text-[#F5C76A] px-3 py-1.5 rounded-full">
                                                <Check className="w-3 h-3" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Specifications */}
                                    <div className="border-t border-[#F5C76A]/20 pt-6">
                                        <h4 className="text-lg font-bold text-[#F5C76A] mb-4 flex items-center gap-2">
                                            <Layers className="w-5 h-5" />
                                            Technical Specifications
                                        </h4>
                                        <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                                            {Object.entries(selectedProduct.specs).map(([key, value], idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-[#F5C76A]/10 last:border-0">
                                                    <span className="text-sm text-[#F5C76A]/70 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </span>
                                                    <span className="text-sm text-[#FBF0D3] font-medium sm:text-right">
                                                        {Array.isArray(value) ? (
                                                            <ul className="space-y-1">
                                                                {value.map((item, i) => (
                                                                    <li key={i} className="flex items-center gap-1 sm:justify-end">
                                                                        <Leaf className="w-3 h-3 text-green-400" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            value
                                                        )}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6 flex gap-4">
                                        <a 
                                            href="#contact-us"
                                            onClick={closeModal}
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#F5C76A] text-[#0E2C19] px-6 py-4 rounded-full font-bold hover:bg-[#F9E1A6] transition-all duration-300"
                                        >
                                            Get Quote
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                        <a 
                                            href={`https://wa.me/916380001916?text=Hi, I'm interested in ${selectedProduct.name}. Can you share more details?`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-full font-bold hover:bg-green-500 transition-all duration-300"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

