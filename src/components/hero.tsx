'use client';

import { motion } from 'framer-motion';

import { content } from '~/content';
import { Icons } from '~/content/icons';
import { MagicButton } from '~/components/ui/magic-button';

export function Hero() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const CTA = Icons[content.hero.cta.icon];

  return (
    <section className='pt-32'>
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mx-auto max-w-4xl text-balance text-center text-5xl font-extrabold leading-[3rem] tracking-tighter'
        >
          {content.hero.heading}
        </motion.h1>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mx-auto mt-4 max-w-4xl text-balance text-center text-xl text-muted-foreground'
        >
          {content.hero.subHeading}
        </motion.p>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='mt-8 flex items-center justify-center space-x-4'>
          <MagicButton duration={4000} as='a' href={content.hero.cta.href} target='_blank'>
            {content.hero.cta.label}
            <CTA className='ml-2 size-5' />
          </MagicButton>
          {Object.entries(content.hero.links).map(([key, value]) => {
            const Icon = Icons[value.icon];
            return (
              <a
                key={key}
                href={value.link}
                target='_blank'
                className='grid size-10 place-content-center rounded-full border p-2 duration-200 hover:text-primary'
              >
                <Icon className='size-5' />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
