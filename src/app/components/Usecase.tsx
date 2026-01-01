'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const useCases = [
	{
		title: 'Horticulture',
		img: '/horiculture.png',
		description: 'Perfect for ornamental plants and flower cultivation',
	},
	{
		title: 'Mushroom Farming',
		img: '/mushroom.png',
		description: 'Ideal substrate for commercial mushroom production',
	},
	{
		title: 'Greenhouses',
		img: '/greenhouse.jpg',
		description: 'Optimized growing medium for controlled environments',
	},
	{
		title: 'Nurseries',
		img: '/nusery.jpg',
		description: 'Excellent for seed germination and plant propagation',
	},
	{
		title: 'Home Gardening',
		img: '/homegarden.jpg',
		description: 'Easy-to-use solution for hobby gardeners',
	},
	{
		title: 'Hydroponics',
		img: '/hydroponic.jpg',
		description: 'Superior water retention for soilless growing systems',
	},
];

export default function UseCases() {
	return (
		<section className="relative bg-gradient-to-br from-[#16442B] via-[#123822] to-[#16442B] text-[#F5C76A] py-24 px-6 sm:px-16 overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<div className="text-center mb-16" data-aos="fade-up">
					<div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-4 py-2 mb-6">
						<span className="w-2 h-2 bg-[#F5C76A] rounded-full animate-pulse"></span>
						<span className="text-sm font-medium uppercase tracking-wider">
							Applications
						</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
						<span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">Versatile</span>{' '}
						<span className="text-[#FBF0D3]">Applications</span>
					</h2>
					<p className="text-lg max-w-3xl mx-auto text-[#F5C76A]/80">
						From commercial farming to home gardens, cocopeat adapts to every
						growing environment.
					</p>
				</div>

				{/* Use cases grid */}
				<div
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					{useCases.map((useCase, index) => (
						<div
							key={index}
							className="group relative bg-[#0E2C19] rounded-2xl overflow-hidden card-hover border border-[#F5C76A]/10 hover:border-[#F5C76A]/30"
						>
							{/* Image */}
							<div className="relative h-56 overflow-hidden">
								<Image
									src={useCase.img}
									alt={useCase.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#0E2C19] via-[#0E2C19]/50 to-transparent opacity-80"></div>
							</div>

							{/* Content overlay */}
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<h3 className="text-xl font-bold text-[#FBF0D3] mb-2 group-hover:text-[#F5C76A] transition-colors">
									{useCase.title}
								</h3>
								<p className="text-sm text-[#F5C76A]/70 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
									{useCase.description}
								</p>
								<a
									href="#contact-us"
									className="inline-flex items-center gap-2 text-[#F5C76A] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100"
								>
									Learn More{' '}
									<ArrowRight className="w-4 h-4" />
								</a>
							</div>

							{/* Decorative corner */}
							<div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#F5C76A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					))}
				</div>

				{/* Bottom stats */}
				<div
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
					data-aos="fade-up"
				>
					{[
						{ number: '500+', label: 'Farms Using Cocopeat' },
						{ number: '6', label: 'Industry Applications' },
						{ number: '95%', label: 'Customer Satisfaction' },
						{ number: '24/7', label: 'Support Available' },
					].map((stat, index) => (
						<div key={index} className="text-center">
							<p className="text-3xl sm:text-4xl font-bold text-[#FBF0D3] mb-2">
								{stat.number}
							</p>
							<p className="text-sm text-[#F5C76A]/60">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
