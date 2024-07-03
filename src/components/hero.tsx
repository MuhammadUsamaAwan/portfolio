'use client';

import { motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';

import { siteConfig } from '~/config/site';
import { MagicButton } from '~/components/ui/magic-button';

import { Icons } from './icons';

export function Hero() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

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
          Crafting Seamless Digital Experiences with <span className='text-primary'>Cutting-Edge Solutions</span>
        </motion.h1>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mx-auto mt-4 max-w-4xl text-balance text-center text-xl text-muted-foreground'
        >
          Hi I&apos;m {siteConfig.title}, a full-stack developer based in Pakistan.
        </motion.p>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='mt-8 flex items-center justify-center space-x-4'>
          <MagicButton duration={4000} as='a' href='/resume.pdf' target='_blank'>
            Dowload Resume
            <DownloadIcon className='ml-2 size-4' />
          </MagicButton>
          <a
            href={siteConfig.links.github}
            className='grid size-10 place-content-center rounded-full border p-2 duration-200 hover:text-primary'
          >
            <Icons.github className='size-6' />
          </a>
          <a
            href={siteConfig.links.linkedin}
            className='grid size-10 place-content-center rounded-full border p-2 duration-200 hover:text-primary'
          >
            <Icons.linkedin className='size-5' />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
