'use client';

import { motion } from 'framer-motion';

import { SkillIcons } from '~/content/skill-icons';
import { Marquee } from '~/components/ui/marquee';

export function Skills() {
  const SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: '25vw' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      viewport={{ once: true }}
      initial='hidden'
      whileInView='visible'
      variants={SLIDE_VARIANTS}
      transition={{ duration: 1 }}
      id='skills'
    >
      <Marquee pauseOnHover className='gap-8 [--duration:20s]'>
        {Object.entries(SkillIcons).map(([name, Icon]) => (
          <Icon key={name} className='size-20 px-5' />
        ))}
      </Marquee>
    </motion.section>
  );
}
