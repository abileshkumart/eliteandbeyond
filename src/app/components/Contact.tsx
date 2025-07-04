import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact-us" className="bg-[#0E2C19] text-[#F5C76A] py-16 px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Grow Together</h2>
                <p className="text-lg max-w-3xl mx-auto text-[#F5C76A]/90">
                    Interested in our products or have questions? We’d love to hear from you!
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-start" data-aos="fade-up">
                
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Phone className="text-[#F5C76A] mt-1" />
                        <div>
                            <p>+91 63800 01916</p>
                            <p>+91 70104 58090</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="text-[#F5C76A] mt-1" />
                        <p>eliteandbeyond@gmail.com</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="text-[#F5C76A] mt-1" />
                        <p>
                            53/2C, Edayapatti, Kokampalayam (PO),<br />
                            Dharapuram (TK), Tirupur – 638702
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#143D2A] p-8 rounded-lg shadow-lg">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded border border-[#F5C76A]/30 bg-transparent text-[#F5C76A] placeholder-[#F5C76A]/70 focus:outline-none focus:border-[#F5C76A] transition"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded border border-[#F5C76A]/30 bg-transparent text-[#F5C76A] placeholder-[#F5C76A]/70 focus:outline-none focus:border-[#F5C76A] transition"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full p-3 rounded border border-[#F5C76A]/30 bg-transparent text-[#F5C76A] placeholder-[#F5C76A]/70 focus:outline-none focus:border-[#F5C76A] transition"
                            required
                        ></textarea>
                        <button className="border border-[#F5C76A] px-6 py-3 rounded hover:bg-[#F5C76A] hover:text-[#0E2C19] transition font-semibold">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
