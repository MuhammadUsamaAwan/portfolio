'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

import { content } from '~/content';
import { SkillIcons } from '~/content/skill-icons';
import { CardBody, CardContainer, CardItem } from '~/components/ui/card';

export function Projects() {
  const SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: '-25vw' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.section
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        variants={SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        id='projects'
      >
        <motion.h1 className='mx-auto mb-8 max-w-4xl text-balance text-center text-4xl font-extrabold leading-[3rem] tracking-tighter'>
          {content.projects.heading}
        </motion.h1>
        <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'>
          {content.projects.projects.map(p => (
            <CardContainer key={p.title}>
              <CardBody className='relative rounded-xl border bg-background p-6'>
                <CardItem translateZ='50' className='text-lg font-semibold'>
                  {p.title}
                </CardItem>
                <CardItem as='p' translateZ='60' className='text-sm text-muted-foreground'>
                  {p.description}
                </CardItem>
                <CardItem translateZ='100' className='mt-4 w-full'>
                  <Image
                    src={p.image}
                    height='1000'
                    width='1000'
                    className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                    alt='thumbnail'
                    sizes='(min-width: 1520px) 369px, (min-width: 1280px) calc(18.18vw + 96px), (min-width: 1160px) 445px, (min-width: 780px) calc(43.61vw - 52px), (min-width: 560px) 445px, calc(94.58vw - 66px)'
                  />
                </CardItem>
                <div className='mt-4 flex items-center justify-between'>
                  <div className='flex -space-x-1.5'>
                    {p.skills?.map((T, i) => {
                      const Icon = typeof T === 'string' ? SkillIcons[T] : T;
                      return (
                        <div key={i} className='grid place-content-center rounded-full border bg-background p-2'>
                          <Icon className='size-5' key={i} />
                        </div>
                      );
                    })}
                  </div>
                  <CardItem
                    translateZ={20}
                    as='a'
                    href={p.href}
                    target='_blank'
                    className='inline-flex items-center text-sm hover:text-primary'
                  >
                    Live Preview <ExternalLinkIcon className='ml-1.5 size-4' />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </motion.section>
    </>
  );
}
