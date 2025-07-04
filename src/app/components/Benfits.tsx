// app/components/Benefits.tsx
import { Droplet, Wind, Leaf, Sliders } from 'lucide-react';

const benefits = [
    {
        title: 'Water Retention',
        description: 'Holds moisture effectively, reducing how often plants need to be watered.',
        icon: <Droplet className="w-8 h-8 text-green-600" />,
    },
    {
        title: 'Aeration',
        description: 'Enhances root breathing by improving airflow in the soil.',
        icon: <Wind className="w-8 h-8 text-green-600" />,
    },
    {
        title: 'Eco-Friendly',
        description: 'Made from coconut husks, it\'s biodegradable and planet-friendly.',
        icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
        title: 'pH Neutral',
        description: 'Works well with a wide range of plants without changing soil balance.',
        icon: <Sliders className="w-8 h-8 text-green-600" />,
    },
];

export default function Benefits() {
    return (
        <section className="bg-[#F5C76A] text-[#0E2C19] py-16 px-6 sm:px-16">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">Why Choose Cocopeat?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Our cocopeat products are packed with advantages that make them a preferred growing medium.
                    Whether you are growing vegetables, flowers, or exotic crops, cocopeat provides the ideal environment.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="mb-4 flex justify-center">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


