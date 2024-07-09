'use client';

import { motion } from 'framer-motion';

import { content } from '~/content';
import { Icons } from '~/content/icons';
import { Marquee } from '~/components/ui/marquee';
import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from '~/components/ui/tooltip';

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
      <Marquee>
        {content.skills.map(s => {
          const Icon = Icons[s.icon];
          return (
            <Tooltip key={s.name}>
              <TooltipTrigger>
                <Icon className='size-10' />
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent>{s.name}</TooltipContent>
              </TooltipPortal>
            </Tooltip>
          );
        })}
      </Marquee>
    </motion.section>
  );
}
