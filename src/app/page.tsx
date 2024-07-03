import { Experience } from '~/components/experience';
import { Hero } from '~/components/hero';
import Projects from '~/components/projects';
import { Skills } from '~/components/skills';

export default function HomePage() {
  return (
    <div className='container'>
      <Hero />
      <div className='mt-20'></div>
      <Skills />
      <div className='mt-20'></div>
      <Experience />
      <div className='mt-20'></div>
      <Projects />
      <div className='mt-20'></div>
    </div>
  );
}
