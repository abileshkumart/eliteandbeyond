import {
  Leaf,
  Layers,
  Package,
  SendHorizonal,
} from 'lucide-react';

const steps = [
  {
    title: 'Explore Coconut Peat',
    description:
      'Discover the fascinating world of coconut peat — a sustainable and eco-friendly growing medium.',
    icon: Leaf,
  },
  {
    title: 'Extract from Husk',
    description:
      'Learn how coconut husks are processed and refined to produce high-quality cocopeat.',
    icon: Layers,
  },
  {
    title: 'Packaged with Care',
    description:
      'Cocopeat is carefully dried, compressed, and packaged to retain its quality.',
    icon: Package,
  },
  {
    title: 'Ready for Global Growth',
    description:
      'Shipped to farmers and gardeners around the world to support sustainable agriculture.',
    icon: SendHorizonal,
  },
];

export default function Process() {
  return (
    <section id="our-process" className="bg-[#EEF4EE] py-20 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2C19] mb-4">
          From Husk to Harvest
        </h2>
        <p className="text-lg text-[#0E2C19]/80 max-w-3xl mx-auto">
          Our cocopeat production journey ensures optimal performance and sustainability at every step — from raw husks to global delivery.
        </p>
      </div>

      <div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative bg-[#0E2C19] text-[#F5C76A] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F5C76A] text-[#0E2C19] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>
                <Icon className="text-[#F5C76A] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#F5C76A]/80">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
