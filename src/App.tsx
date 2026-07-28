import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import N8nAutomation from './components/N8nAutomation';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';

const BlogIndex = lazy(() => import('./Pages/Blog/Index'));
const BlogPost = lazy(() => import('./Pages/Blog/Post'));

function HomePage() {
  useSEO({
    title: 'Olly Smith | Frontend Developer',
    description:
      'Frontend Developer with 5+ years of experience building React, Next.js, and React Native products at scale. Currently at PropertyGuru Group.',
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
        <Experience />
        <N8nAutomation />
        <Testimonial />
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
