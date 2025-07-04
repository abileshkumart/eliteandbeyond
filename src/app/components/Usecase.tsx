export default function UseCases() {
  return (
    <section className="bg-[#1B4D33] text-[#F5C76A] py-16 px-6 sm:px-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Where It Can Be Used</h2>
        <p className="text-lg max-w-3xl mx-auto">From horticulture to hydroponics, cocopeat fits everywhere.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" data-aos="fade-up">
        {[
          { title: 'Horticulture', img: '/horiculture.png' },
          { title: 'Mushroom Farming', img: '/mushroom.png' },
          { title: 'Greenhouses', img: '/greenhouse.jpg' },
          { title: 'Nurseries', img: '/nusery.jpg' },
          { title: 'Home Gardening', img: '/homegarden.jpg' },
          { title: 'Hydroponics', img: '/hydroponic.jpg' },
        ].map((u, i) => (
          <div key={i} className="bg-[#F5C76A] text-[#0E2C19] rounded-lg overflow-hidden shadow hover:scale-105 transition">
            <img src={u.img} alt={u.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{u.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
