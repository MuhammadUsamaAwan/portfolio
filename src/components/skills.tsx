'use client';

import { motion } from 'framer-motion';

import { Icons } from '~/components/icons';

export function Skills() {
  const SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: '-25vw' },
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
      className='grid grid-cols-5 gap-y-8 lg:grid-cols-10'
    >
      <Icons.typescript className='mx-auto size-10' />
      <Icons.react className='mx-auto size-10' />
      <Icons.next className='mx-auto size-10' />
      <Icons.node className='mx-auto size-10' />
      <Icons.express className='mx-auto size-10' />
      <Icons.nest className='mx-auto size-10' />
      <Icons.tailwind className='mx-auto size-10' />
      <Icons.postgres className='mx-auto size-10' />
      <Icons.mongo className='mx-auto size-10' />
      <Icons.aws className='mx-auto size-10' />
    </motion.section>
  );
}
