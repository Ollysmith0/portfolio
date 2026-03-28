import PageShell from '@/components/PageShell';
import Work from '../components/Work';
import Testimonial from '../components/Testimonial';

export default function ProjectPage() {
  return (
    <PageShell mainClassName="pt-24 md:pt-28">
      <div className="relative z-10">
        <Work />
        <Testimonial />
      </div>
    </PageShell>
  );
}
