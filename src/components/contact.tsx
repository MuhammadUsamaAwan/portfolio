'use client';

import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';

import { siteConfig } from '~/config/site';
import { MagicButton } from '~/components/ui/magic-button';

export function Contact() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <section>
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
          className='mx-auto max-w-4xl text-balance text-center text-4xl font-extrabold leading-[3rem] tracking-tighter'
        >
          Your Next Big Idea <span className='text-primary'>Starts Here</span>
        </motion.h1>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mx-auto mt-4 max-w-4xl text-balance text-center text-lg text-muted-foreground'
        >
          Let&apos;s collaborate to transform your vision into reality. Reach out to discuss your project and bring your
          ideas to life.
        </motion.p>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='mt-8 flex items-center justify-center space-x-4'>
          <MagicButton duration={4000} as='a' href={siteConfig.links.mail} containerClassName='w-48'>
            Let&apos;s get in touch
            <SendIcon className='ml-2 size-4' />
          </MagicButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
