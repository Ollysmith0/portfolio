import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';

export default function App() {
  // Apply homepage SEO meta tags
  useSEO({
    title: 'Olly Smith Store | Premium Web & E-Commerce Solutions',
    description:
      'Premium web development & e-commerce solutions. I build conversion-optimized WordPress, Shopify, and custom stores with payment integration. 50+ stores built with 98% client satisfaction.',
    ogUrl: 'https://ollysmith.store/',
    canonical: 'https://ollysmith.store/',
  });

  return (
    <div className="site-shell">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
