'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { content } from '~/content';

export function Certifications() {
  const VARIANTS = {
    hidden: { x: '20vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      viewport={{ once: true, amount: 0.3 }}
      initial='hidden'
      whileInView='visible'
      variants={VARIANTS}
      transition={{ duration: 1 }}
      id='certifications'
    >
      <h1 className='mx-auto mb-8 max-w-4xl text-balance text-center text-4xl font-extrabold leading-[3rem] tracking-tighter'>
        {content.certifications.heading}
      </h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0'>
        {content.certifications.certifications.map((c, i) => (
          <div
            key={c.name}
            className='group relative'
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.span
                  className='absolute inset-0 z-[-1] block size-full rounded-2xl bg-primary/30'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className='rounded-xl border bg-background p-4 md:m-1.5'>
              <Image
                src={c.image}
                height='1000'
                width='1000'
                className='h-72 w-full rounded-xl object-cover'
                alt='thumbnail'
                sizes='(min-width: 1520px) 369px, (min-width: 1280px) calc(18.18vw + 96px), (min-width: 1160px) 445px, (min-width: 780px) calc(43.61vw - 52px), (min-width: 560px) 445px, calc(94.58vw - 66px)'
              />
              <div className='mb-1 mt-4 line-clamp-1 font-semibold'>{c.name}</div>
              <div className='flex items-center justify-between text-sm text-muted-foreground'>
                <div>{c.instructor}</div>
                <div>{c.issuer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
