function CTASection() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur sm:p-12">
        <h3 className="text-2xl font-semibold sm:text-3xl">Ready to create your couple entry visuals?</h3>
        <p className="mt-2 max-w-2xl text-white/75">
          Share your theme, mood, and venue details. We craft a set of images that match your vibe with a sleek, interactive digital-art feel.
        </p>
        <form
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/30"
          />
          <input
            type="text"
            name="theme"
            placeholder="Theme (e.g., Modern Glass, Garden, Neon)"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/30 sm:col-span-2"
          />
          <textarea
            name="details"
            rows="4"
            placeholder="Tell us about your concept, colors, and inspiration"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/30 sm:col-span-2"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Request Concepts
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CTASection;
