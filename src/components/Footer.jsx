function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <p>© {new Date().getFullYear()} Couple Entry Studio. All rights reserved.</p>
        <p className="mt-2">Crafted with modern, vibrant technology and an eye for timeless moments.</p>
      </div>
    </footer>
  );
}

export default Footer;
