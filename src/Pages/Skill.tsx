import Header from '../components/Header';
import Skill from '../components/Skill';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F9FAFB]">
      <Header />
      <main className="pt-16">
        <Skill />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
