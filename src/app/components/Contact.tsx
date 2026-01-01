'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		productInterest: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setIsSubmitted(true);
		// Reset after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormState({
				name: '',
				email: '',
				phone: '',
				message: '',
				productInterest: '',
			});
		}, 3000);
	};

	return (
		<section
			id="contact-us"
			className="relative bg-gradient-to-br from-[#0E2C19] via-[#143D2A] to-[#0E2C19] text-[#F5C76A] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#F5C76A]/5 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<div className="text-center mb-10 sm:mb-16" data-aos="fade-up">
					<div className="inline-flex items-center gap-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
						<MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
						<span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
							Get In Touch
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						<span className="bg-gradient-to-r from-[#F5C76A] via-[#F9E1A6] to-[#F5C76A] bg-clip-text text-transparent">Let's Grow</span>{' '}
						<span className="text-[#F7E6B5]">Together</span>
					</h2>
					<p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-[#F5C76A]/80 px-2">
						Ready to source premium cocopeat? Get in touch for bulk orders,
						custom specifications, or any questions.
					</p>
				</div>

				<div
					className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-start"
					data-aos="fade-up"
				>
					{/* Contact Info - Simple List */}
					<div className="space-y-4 sm:space-y-6">
						{/* Contact Details - Simple Style */}
						<div className="bg-gradient-to-br from-[#1B4D33] to-[#143D2A] p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#F5C76A]/10">
							<h3 className="font-bold text-[#F7E6B5] mb-4 sm:mb-5 text-base sm:text-lg">Contact Details</h3>
							
							<div className="space-y-4">
								{/* Phone */}
								<a href="tel:+916380001916" className="flex items-center gap-3 group">
									<div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5C76A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C76A]" />
									</div>
									<div>
										<p className="text-[#F5C76A]/60 text-xs uppercase tracking-wide">Phone</p>
										<p className="text-[#F7E6B5] text-sm sm:text-base group-hover:text-[#F5C76A] transition-colors">+91 63800 01916</p>
									</div>
								</a>

								{/* Email */}
								<a href="mailto:eliteandbeyond@gmail.com" className="flex items-center gap-3 group">
									<div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5C76A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C76A]" />
									</div>
									<div>
										<p className="text-[#F5C76A]/60 text-xs uppercase tracking-wide">Email</p>
										<p className="text-[#F7E6B5] text-sm sm:text-base group-hover:text-[#F5C76A] transition-colors break-all">eliteandbeyond@gmail.com</p>
									</div>
								</a>

								{/* Location */}
								<div className="flex items-center gap-3">
									<div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5C76A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C76A]" />
									</div>
									<div>
										<p className="text-[#F5C76A]/60 text-xs uppercase tracking-wide">Location</p>
										<p className="text-[#F7E6B5] text-sm sm:text-base">Tirupur, Tamil Nadu, India</p>
									</div>
								</div>

								{/* Business Hours */}
								<div className="flex items-center gap-3">
									<div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5C76A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C76A]" />
									</div>
									<div>
										<p className="text-[#F5C76A]/60 text-xs uppercase tracking-wide">Hours</p>
										<p className="text-[#F7E6B5] text-sm sm:text-base">Mon - Sat: 9AM - 6PM</p>
									</div>
								</div>
							</div>
						</div>

						{/* WhatsApp CTA */}
						<a
							href="https://wa.me/916380001916?text=Hi%2C%20I'm%20interested%20in%20your%20cocopeat%20products"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-green-600 hover:bg-green-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
						>
							<svg
								className="w-5 h-5 sm:w-6 sm:h-6"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
							Chat on WhatsApp
						</a>

						{/* Map placeholder or image */}
						<div className="bg-gradient-to-br from-[#1B4D33] to-[#143D2A] p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-[#F5C76A]/10">
							<div className="bg-[#0E2C19] rounded-lg sm:rounded-xl h-32 sm:h-48 flex items-center justify-center">
								<div className="text-center">
									<MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-[#F5C76A]/40 mx-auto mb-1 sm:mb-2" />
									<p className="text-[#F5C76A]/60 text-xs sm:text-sm">
										Tirupur, Tamil Nadu, India
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-gradient-to-br from-[#1B4D33] to-[#143D2A] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-[#F5C76A]/10">
						{isSubmitted ? (
							<div className="text-center py-8 sm:py-12">
								<div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
									<CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
								</div>
								<h3 className="text-xl sm:text-2xl font-bold text-[#F7E6B5] mb-2">
									Message Sent!
								</h3>
								<p className="text-[#F5C76A]/80 text-sm sm:text-base">
									We'll get back to you within 24 hours.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
								<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
									<div>
										<label className="block text-xs sm:text-sm font-medium text-[#F5C76A]/80 mb-1.5 sm:mb-2">
											Your Name *
										</label>
										<input
											type="text"
											value={formState.name}
											onChange={(e) =>
												setFormState({
													...formState,
													name: e.target.value,
												})
											}
											placeholder="John Doe"
											className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#F5C76A]/20 bg-[#0E2C19]/50 text-[#F7E6B5] placeholder-[#F5C76A]/40 focus:outline-none focus:border-[#F5C76A] focus:ring-2 focus:ring-[#F5C76A]/20 transition-all text-sm sm:text-base"
											required
										/>
									</div>
									<div>
										<label className="block text-xs sm:text-sm font-medium text-[#F5C76A]/80 mb-1.5 sm:mb-2">
											Email Address *
										</label>
										<input
											type="email"
											value={formState.email}
											onChange={(e) =>
												setFormState({
													...formState,
													email: e.target.value,
												})
											}
											placeholder="john@example.com"
											className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#F5C76A]/20 bg-[#0E2C19]/50 text-[#F7E6B5] placeholder-[#F5C76A]/40 focus:outline-none focus:border-[#F5C76A] focus:ring-2 focus:ring-[#F5C76A]/20 transition-all text-sm sm:text-base"
											required
										/>
									</div>
								</div>

								<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
									<div>
										<label className="block text-xs sm:text-sm font-medium text-[#F5C76A]/80 mb-1.5 sm:mb-2">
											Phone Number
										</label>
										<input
											type="tel"
											value={formState.phone}
											onChange={(e) =>
												setFormState({
													...formState,
													phone: e.target.value,
												})
											}
											placeholder="+1 234 567 8900"
											className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#F5C76A]/20 bg-[#0E2C19]/50 text-[#F7E6B5] placeholder-[#F5C76A]/40 focus:outline-none focus:border-[#F5C76A] focus:ring-2 focus:ring-[#F5C76A]/20 transition-all text-sm sm:text-base"
										/>
									</div>
									<div>
										<label className="block text-xs sm:text-sm font-medium text-[#F5C76A]/80 mb-1.5 sm:mb-2">
											Product Interest
										</label>
										<select
											value={formState.productInterest}
											onChange={(e) =>
												setFormState({
													...formState,
													productInterest: e.target.value,
												})
											}
											className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#F5C76A]/20 bg-[#0E2C19]/50 text-[#F7E6B5] focus:outline-none focus:border-[#F5C76A] focus:ring-2 focus:ring-[#F5C76A]/20 transition-all text-sm sm:text-base"
										>
											<option
												value=""
												className="bg-[#0E2C19]"
											>
												Select a product
											</option>
											<option
												value="block"
												className="bg-[#0E2C19]"
											>
												Cocopeat Block
											</option>
											<option
												value="bag"
												className="bg-[#0E2C19]"
											>
												Cocopeat Grow Bag
											</option>
											<option
												value="brick"
												className="bg-[#0E2C19]"
											>
												Cocopeat Brick
											</option>
											<option
												value="custom"
												className="bg-[#0E2C19]"
											>
												Custom Order
											</option>
										</select>
									</div>
								</div>

								<div>
									<label className="block text-xs sm:text-sm font-medium text-[#F5C76A]/80 mb-1.5 sm:mb-2">
										Your Message *
									</label>
									<textarea
										value={formState.message}
										onChange={(e) =>
											setFormState({
												...formState,
												message: e.target.value,
											})
										}
										placeholder="Tell us about your requirements..."
										rows={4}
										className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#F5C76A]/20 bg-[#0E2C19]/50 text-[#F7E6B5] placeholder-[#F5C76A]/40 focus:outline-none focus:border-[#F5C76A] focus:ring-2 focus:ring-[#F5C76A]/20 transition-all resize-none text-sm sm:text-base"
										required
									></textarea>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#F5C76A] text-[#0E2C19] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-[#F7E6B5] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shimmer"
								>
									{isSubmitting ? (
										<>
											<div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#0E2C19]/30 border-t-[#0E2C19] rounded-full animate-spin"></div>
											Sending...
										</>
									) : (
										<>
											Send Message
											<Send className="w-4 h-4 sm:w-5 sm:h-5" />
										</>
									)}
								</button>

								<p className="text-center text-[#F5C76A]/50 text-xs sm:text-sm">
									We typically respond within 24 hours
								</p>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
