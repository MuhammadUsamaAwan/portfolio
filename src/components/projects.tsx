'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

import { CardBody, CardContainer, CardItem } from '~/components/ui/card';

import { Icons } from './icons';

const projects = [
  {
    title: 'MaxAttire',
    href: 'http://themaxattire.com/',
    image: '/maxattire.png',
    description: 'A comprehensive e-commerce platform for clothing and accessories.',
    technologies: [Icons.typescript, Icons.next, Icons.postgres, Icons.tailwind],
  },
  {
    title: 'ChatDocs',
    href: 'http://github.com/MuhammadUsamaAwan/chat-docs',
    image: '/chatdocs.png',
    description: 'A LLM Chatbot that answers any questions related to document you upload.',
    technologies: [Icons.typescript, Icons.next, Icons.postgres, Icons.tailwind],
  },
  {
    title: 'Expense Tracker',
    href: 'http://themaxattire.com/',
    image: '/expensetracker.png',
    description: 'A PWA that allows user can create their own categories and templates to track their expenses.',
    technologies: [Icons.typescript, Icons.next, Icons.postgres, Icons.tailwind],
  },
];

export default function Projects() {
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
      id='projects'
      className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'
    >
      {projects.map((project, index) => (
        <CardContainer key={`project_${index}`}>
          <CardBody className='relative rounded-xl border bg-background p-6'>
            <CardItem translateZ='50' className='text-lg font-semibold'>
              {project.title}
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-sm text-muted-foreground'>
              {project.description}
            </CardItem>
            <CardItem translateZ='100' className='mt-4 w-full'>
              <Image
                src={project.image}
                height='1000'
                width='1000'
                className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                alt='thumbnail'
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
              />
            </CardItem>
            <div className='mt-4 flex items-center justify-between'>
              <div className='flex -space-x-1.5'>
                {project.technologies?.map((T, i) => (
                  <div key={i} className='grid place-content-center rounded-full border bg-background p-2'>
                    <T className='size-5' key={i} />
                  </div>
                ))}
              </div>
              <CardItem
                translateZ={20}
                as='a'
                href={project.href}
                target='_blank'
                className='inline-flex items-center text-sm hover:text-primary'
              >
                Live Preview <ExternalLinkIcon className='ml-1.5 size-4' />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </motion.section>
  );
}
