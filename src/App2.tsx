import PageShell from '@/components/PageShell';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';

export default function App2() {
  return (
    <PageShell>
      <div className="relative z-10">
        <Hero />
        <Testimonial />
      </div>
    </PageShell>
  );
}
