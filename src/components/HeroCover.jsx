import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="pointer-events-none mx-auto max-w-3xl text-center">
          <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl">
            Modern Couple Entry Images
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Create vibrant, digital-art inspired couple entry visuals with a sleek, glass-card aesthetic. Interactive and unforgettable.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#gallery"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Gallery
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCover;
