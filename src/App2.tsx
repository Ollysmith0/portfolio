import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App2() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F9FAFB]">
      <Header />
      <main>
        <Hero />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
