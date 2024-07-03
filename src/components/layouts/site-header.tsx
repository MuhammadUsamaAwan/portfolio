'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { siteConfig } from '~/config/site';

export function SiteHeader() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <header>
      <AnimatePresence mode='wait'>
        <motion.nav
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className='fixed inset-x-0 top-4 z-10 mx-auto flex max-w-fit space-x-1 rounded-lg border bg-background px-2 sm:px-3'
        >
          {siteConfig.nav.map(item => (
            <Link
              href={item.href}
              key={item.name}
              className='px-1 py-3 text-sm font-medium duration-200 hover:text-primary sm:px-3'
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </motion.nav>
      </AnimatePresence>
    </header>
  );
}
