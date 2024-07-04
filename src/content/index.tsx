import { DownloadIcon, SendIcon } from 'lucide-react';

export const content = {
  site: {
    title: 'Muhammad Usama',
    description:
      'Full Stack Developer. Skilled in critical thinking and analytical problem-solving. Passionate about continuously learning new technologies and enhancing current skill sets.',
  },
  nav: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ],
  hero: {
    heading: (
      <>
        Crafting Seamless Digital Experiences with <span className='text-primary'>Cutting-Edge Solutions</span>
      </>
    ),
    subHeading: 'Hello, I am Muhammad Usama, a Full Stack Developer based in Pakistan.',
    cta: {
      label: 'Download Resume',
      href: '/resume.pdf',
      icon: <DownloadIcon className='ml-2 size-4' />,
    },
    links: {
      github: {
        link: 'https://github.com/MuhammadUsamaAwan',
        icon: (
          <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='size-5'>
            <title>GitHub</title>
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          </svg>
        ),
      },
      linkedin: {
        link: 'https://www.linkedin.com/in/muhammad-usama-704400192/',
        icon: (
          <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='size-4'>
            <title>LinkedIn</title>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        ),
      },
    },
  },
  experience: [
    {
      duration: 'May 2023 - Present',
      company: 'Embrace IT',
      location: 'Islamabad',
      position: 'Fullstack Developer',
      description:
        'Played a vital role in developing a comprehensive HR platform using React.js, Nest.js, PostgreSQL, Recoil, and GraphQL. Spearheaded the design and implementation of a dynamic Unreal Engine streaming-driven mock-up delivery system for multiple tenants, utilizing Nest.js, React.js, Three.js, Apollo Federation and AWS. Played a pivotal role in developing a sophisticated food ordering and management web application with Next.js, Nest.js, PostgreSQL, GraphQL and AWS. Contributed to the development of a construction management software using React.js, Nest.js, React Native, PostgreSQL, and AWS. Collaborated seamlessly with cross-functional teams to ensure successful feature delivery and enhancements. Demonstrated a proactive approach to staying updated on emerging technologies and implementing best practices. Showcased dedication to innovation and proficiency in integrating diverse technologies into a unified and impactful application.',
    },
    {
      duration: 'Apr 2022 - May 2023',
      company: 'Fauji Foundation Head Office',
      location: 'Rawalpindi',
      position: 'Frontend Developer',
      description:
        "Played a pivotal role in advancing front-end development for the Medix Hospital Management System (HMS), leveraging React.js and prominent libraries within the ecosystem. Collaborated closely with cross-functional teams to implement robust REST APIs, integrating JWT Authentication for enhanced security. Engineered multiple dashboards and portals utilizing React, to develop rich user experience. Leveraged Redux Toolkit and RTK Query to streamline state management, ensuring seamless data flow and application responsiveness. Spearheaded the integration of React Router for efficient navigation and Vite for rapid development, further enhancing the Medix system's front-end capabilities. Employed Ant Design and Tailwind CSS frameworks to create visually appealing and intuitive user interfaces, enhancing accessibility and user engagement.",
    },
    {
      duration: 'Sep 2019 - Apr 2022',
      company: 'SOFIT Consultancy',
      location: 'Islamabad',
      position: 'Frontend Developer',
      description:
        'Developed and delivered a range of dynamic dashboards and interactive company portals, showcasing expertise in React.js, Next.js, and responsive web design techniques. Leveraged advanced front-end tools and technologies, such as React Hooks, Redux Toolkit, and React Router, to create intuitive user interfaces and enhance user interactions. Successfully implemented JWT Authentication for enhanced security, ensuring secure access to sensitive data through meticulously designed REST APIs and seamless integration with Axios for data retrieval. Skillfully employed Formik and Yup libraries to streamline data entry and validation processes, enhancing user experience and data accuracy across various forms and input fields. Collaborated closely with cross-functional teams to integrate SASS and Bootstrap frameworks, optimizing styling and design consistency across multiple dashboards and portals. Actively contributed to code-base maintenance and performance optimizations, aligning with best practices to ensure efficient and high-performing front-end solutions.',
    },
  ],
  projects: {
    heading: (
      <>
        A Small selection of <span className='text-primary'>My Recent Projects</span>
      </>
    ),
    projects: [
      {
        title: 'MaxAttire',
        href: 'http://themaxattire.com/',
        image: '/maxattire.png',
        description: 'A comprehensive e-commerce platform for clothing and accessories.',
      },
      {
        title: 'ChatDocs',
        href: 'http://github.com/MuhammadUsamaAwan/chat-docs',
        image: '/chatdocs.png',
        description: 'A LLM Chatbot that answers any questions related to document you upload.',
      },
      {
        title: 'Expense Tracker',
        href: 'http://themaxattire.com/',
        image: '/expensetracker.png',
        description: 'A PWA that allows user can create their own categories and templates to track their expenses.',
      },
    ],
  },
  contact: {
    heading: (
      <>
        Your Next Big Idea <span className='text-primary'>Starts Here</span>
      </>
    ),
    subHeading:
      "Let's collaborate to transform your vision into reality. Reach out to discuss your project and bring your ideas to life.",
    cta: {
      label: "Let's get in touch",
      href: 'mailto:underusama@gmail.com',
      icon: <SendIcon className='ml-2 size-4' />,
    },
  },
};
