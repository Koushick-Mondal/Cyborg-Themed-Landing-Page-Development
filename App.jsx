import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

// Components
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import Technology from './components/Technology';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative selection:bg-primary/30 selection:text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <Background />
          
          <main>
            <Hero />
            <About />
            <Features />
            <Stats />
            <Technology />
            <Gallery />
            <Process />
            <Testimonials />
            <CTA />
          </main>
          
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
