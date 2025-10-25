import HeroCover from './components/HeroCover';
import ImageShowcase from './components/ImageShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroCover />
      <main>
        <ImageShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
