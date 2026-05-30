import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import N8nAutomation from './components/N8nAutomation';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';

const BlogIndex = lazy(() => import('./Pages/Blog/Index'));
const BlogPost = lazy(() => import('./Pages/Blog/Post'));

function HomePage() {
  useSEO({
    title: 'Olly Smith | Full-Stack Developer & n8n Automation Expert',
    description:
      'Full-stack developer & n8n automation expert. I build React Native apps, modern web experiences, and business automation workflows that save hours every week.',
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
        <N8nAutomation />
        <Testimonial />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Suspense>
  );
}
