'use client';

import { motion } from 'framer-motion';

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
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial='hidden'
            whileInView='show'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineTime>May 2023 - Present</TimelineTime>
                <TimelineIcon />
                <TimelineTitle>
                  <div>Embrace IT, Islamabad</div>
                  <div className='text-sm font-normal text-muted-foreground'>Fullstack Developer</div>
                  <div className='text-sm font-normal text-muted-foreground sm:hidden'>May 2023 - Present</div>
                </TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription>
                  Played a vital role in developing a comprehensive HR platform using React.js, Nest.js, PostgreSQL,
                  Recoil, and GraphQL. Spearheaded the design and implementation of a dynamic Unreal Engine
                  streaming-driven mock-up delivery system for multiple tenants, utilizing Nest.js, React.js, Three.js,
                  Apollo Federation and AWS. Played a pivotal role in developing a sophisticated food ordering and
                  management web application with Next.js, Nest.js, PostgreSQL, GraphQL and AWS. Contributed to the
                  development of a construction management software using React.js, Nest.js, React Native, PostgreSQL,
                  and AWS. Collaborated seamlessly with cross-functional teams to ensure successful feature delivery and
                  enhancements. Demonstrated a proactive approach to staying updated on emerging technologies and
                  implementing best practices. Showcased dedication to innovation and proficiency in integrating diverse
                  technologies into a unified and impactful application.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial='hidden'
            whileInView='show'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineTime>Apr 2022 - May 2023</TimelineTime>
                <TimelineIcon />
                <TimelineTitle>
                  <div>Fauji Foundation Head Office, Rawalpindi</div>
                  <div className='text-sm font-normal text-muted-foreground'>Frontend Developer</div>
                  <div className='text-sm font-normal text-muted-foreground sm:hidden'>Apr 2022 - May 2023</div>
                </TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription>
                  Played a pivotal role in advancing front-end development for the Medix Hospital Management System
                  (HMS), leveraging React.js and prominent libraries within the ecosystem. Collaborated closely with
                  cross-functional teams to implement robust REST APIs, integrating JWT Authentication for enhanced
                  security. Engineered multiple dashboards and portals utilizing React, to develop rich user experience.
                  Leveraged Redux Toolkit and RTK Query to streamline state management, ensuring seamless data flow and
                  application responsiveness. Spearheaded the integration of React Router for efficient navigation and
                  Vite for rapid development, further enhancing the Medix system&apos;s front-end capabilities. Employed
                  Ant Design and Tailwind CSS frameworks to create visually appealing and intuitive user interfaces,
                  enhancing accessibility and user engagement.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial='hidden'
            whileInView='show'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineTime>Sep 2019 - Apr 2022</TimelineTime>
                <TimelineIcon />
                <TimelineTitle>
                  <div>SOFIT Consultancy</div>
                  <div className='text-sm font-normal text-muted-foreground'>Frontend Developer</div>
                  <div className='text-sm font-normal leading-none text-muted-foreground sm:hidden'>
                    Sep 2019 - Apr 2022
                  </div>
                </TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription>
                  Developed and delivered a range of dynamic dashboards and interactive company portals, showcasing
                  expertise in React.js, Next.js, and responsive web design techniques. Leveraged advanced front-end
                  tools and technologies, such as React Hooks, Redux Toolkit, and React Router, to create intuitive user
                  interfaces and enhance user interactions. Successfully implemented JWT Authentication for enhanced
                  security, ensuring secure access to sensitive data through meticulously designed REST APIs and
                  seamless integration with Axios for data retrieval. Skillfully employed Formik and Yup libraries to
                  streamline data entry and validation processes, enhancing user experience and data accuracy across
                  various forms and input fields. Collaborated closely with cross-functional teams to integrate SASS and
                  Bootstrap frameworks, optimizing styling and design consistency across multiple dashboards and
                  portals. Actively contributed to code-base maintenance and performance optimizations, aligning with
                  best practices to ensure efficient and high-performing front-end solutions.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        </Timeline>
      </div>
    </section>
  );
};
