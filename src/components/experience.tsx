'use client';

import { motion } from 'framer-motion';

import { content } from '~/content';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from '~/components/ui/timeline';

export const Experience = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id='experience' className='flex justify-center'>
      <div>
        <Timeline>
          {content.experience.map(ex => (
            <motion.div
              key={ex.company}
              viewport={{ once: true, amount: 0.2 }}
              initial='hidden'
              whileInView='show'
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineTime>{ex.duration}</TimelineTime>
                  <TimelineIcon />
                  <TimelineTitle>
                    <div>
                      {ex.company}, {ex.location}
                    </div>
                    <div className='text-sm font-normal text-muted-foreground'>{ex.position}</div>
                    <div className='text-sm font-normal text-muted-foreground sm:hidden'>{ex.duration}</div>
                  </TimelineTitle>
                </TimelineHeader>
                <TimelineContent>
                  <TimelineDescription>{ex.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};
