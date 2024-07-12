import { Certifications } from '~/components/certifications';
import { Contact } from '~/components/contact';
import { Experience } from '~/components/experience';
import { Hero } from '~/components/hero';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';

export default function HomePage() {
  return (
    <div className='container mb-20 space-y-20 overflow-x-hidden'>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
