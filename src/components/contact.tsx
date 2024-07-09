'use client';

import { motion } from 'framer-motion';

import { content } from '~/content';
import { Icons } from '~/content/icons';
import { MagicButton } from '~/components/ui/magic-button';

export function Contact() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const SendIcon = Icons[content.contact.cta.icon];

  return (
    <motion.section
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
      id='contact'
    >
      <motion.h1
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='mx-auto max-w-4xl text-balance text-center text-4xl font-extrabold leading-[3rem] tracking-tighter'
      >
        {content.contact.heading}
      </motion.h1>
      <motion.p
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='mx-auto mt-4 max-w-4xl text-balance text-center text-lg text-muted-foreground'
      >
        {content.contact.subHeading}
      </motion.p>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='mt-8 flex items-center justify-center space-x-4'>
        <MagicButton duration={4000} as='a' href={content.contact.cta.href} containerClassName='w-48'>
          {content.contact.cta.label}
          <SendIcon className='ml-2 size-5' />
        </MagicButton>
      </motion.div>
    </motion.section>
  );
}
