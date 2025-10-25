function ImageCard({ src, title }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 ring-1 ring-white/10">
      <img
        src={src}
        alt={title}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        loading="lazy"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-sm text-white/90">
        <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 backdrop-blur">
          {title}
        </span>
      </figcaption>
    </figure>
  );
}

function ImageShowcase() {
  const items = [
    {
      src:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop',
      title: 'Golden Hour Entrance',
    },
    {
      src:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      title: 'Urban Chic Walk-in',
    },
    {
      src:
        'https://images.unsplash.com/photo-1518602164572-00b6b8389e9a?q=80&w=1600&auto=format&fit=crop',
      title: 'Pastel Dreamway',
    },
    {
      src:
        'https://images.unsplash.com/photo-1519741496591-20ba9b2f720a?q=80&w=1600&auto=format&fit=crop',
      title: 'Garden Stroll',
    },
    {
      src:
        'https://images.unsplash.com/photo-1519741495712-5f6b4d8a3d4f?q=80&w=1600&auto=format&fit=crop',
      title: 'Cinematic Arrival',
    },
    {
      src:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
      title: 'Monochrome Elegance',
    },
  ];

  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Couple Entry Gallery</h2>
          <p className="mt-1 text-sm text-white/70">
            A curated set of entrance moments blending modern aesthetics with vibrant energy.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <ImageCard key={idx} src={item.src} title={item.title} />
        ))}
      </div>
    </section>
  );
}

export default ImageShowcase;
