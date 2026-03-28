import PageShell from '@/components/PageShell';
import Skill from '../components/Skill';
import Testimonial from '../components/Testimonial';

export default function SkillPage() {
  return (
    <PageShell mainClassName="pt-24 md:pt-28">
      <div className="relative z-10">
        <Skill />
        <Testimonial />
      </div>
    </PageShell>
  );
}
