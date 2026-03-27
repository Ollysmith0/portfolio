import Header from '../components/Header';
import Work from '../components/Work';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F9FAFB]">
      <Header />
      <main className="pt-16">
        <Work />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
