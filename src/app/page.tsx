import { Hero } from '~/components/hero';
import { Skills } from '~/components/skills';

export default function HomePage() {
  return (
    <div className='container'>
      <Hero />
      <div className='mt-20'></div>
      <Skills />
    </div>
  );
}
