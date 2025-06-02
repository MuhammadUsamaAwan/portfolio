import type { Icon } from '~/content/icons';

export const content = {
  gihubUsername: 'MuhammadUsamaAwan',
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
      icon: 'download' satisfies Icon as Icon,
    },
    links: {
      github: {
        link: 'https://github.com/MuhammadUsamaAwan',
        icon: 'github' satisfies Icon as Icon,
      },
      linkedin: {
        link: 'https://www.linkedin.com/in/muhammad-usama-704400192/',
        icon: 'linkedin' satisfies Icon as Icon,
      },
    },
  },
  skills: [
    {
      name: 'Typescript',
      icon: 'typescript' satisfies Icon as Icon,
    },
    {
      name: 'React',
      icon: 'react' satisfies Icon as Icon,
    },
    {
      name: 'Next',
      icon: 'next' satisfies Icon as Icon,
    },
    {
      name: 'Svelte',
      icon: 'svelte' satisfies Icon as Icon,
    },
    {
      name: 'Astro',
      icon: 'astro' satisfies Icon as Icon,
    },
    {
      name: 'Node',
      icon: 'node' satisfies Icon as Icon,
    },
    {
      name: 'Bun',
      icon: 'bun' satisfies Icon as Icon,
    },
    {
      name: 'Express',
      icon: 'express' satisfies Icon as Icon,
    },
    {
      name: 'Fastify',
      icon: 'fastify' satisfies Icon as Icon,
    },
    {
      name: 'Nest',
      icon: 'nest' satisfies Icon as Icon,
    },
    {
      name: 'Postgres',
      icon: 'postgres' satisfies Icon as Icon,
    },
    {
      name: 'MySQL',
      icon: 'mySQL' satisfies Icon as Icon,
    },
    {
      name: 'MongoDB',
      icon: 'mongo' satisfies Icon as Icon,
    },
    {
      name: 'Firebase',
      icon: 'firebase' satisfies Icon as Icon,
    },
    {
      name: 'GraphQL',
      icon: 'graphql' satisfies Icon as Icon,
    },
    {
      name: 'TailwindCSS',
      icon: 'tailwind' satisfies Icon as Icon,
    },
    {
      name: 'AWS',
      icon: 'aws' satisfies Icon as Icon,
    },
    {
      name: 'Docker',
      icon: 'docker' satisfies Icon as Icon,
    },
    {
      name: 'React Testing Library',
      icon: 'reactTestingLibrary' satisfies Icon as Icon,
    },
    {
      name: 'Cypress',
      icon: 'cypress' satisfies Icon as Icon,
    },
  ],
  experience: [
    {
      duration: 'Dec 2024 - Present',
      company: 'DHA Head Office',
      location: 'Islamabad',
      position: 'Fullstack Developer',
      description:
        'Designed and developed an advanced Attendance Management System leveraging React.js, Nest.js, Hono, Bun, Go, and PostgreSQL. Integrated ZKTeco machines, mobile applications, and geolocation tracking for seamless attendance monitoring.Contributed to the development of an HR Management System (HRMS) using .NET Core and SQL Server, utilizing Crystal Reports and DevExpress for robust reporting',
    },
    {
      duration: 'May 2023 - July 2024',
      company: 'Embrace IT',
      location: 'Islamabad',
      position: 'Fullstack Developer',
      description:
        'Developed an HR platform using React.js, Nest.js, PostgreSQL, Recoil, and GraphQL. Designed a dynamic Unreal Engine streaming-driven mock-up delivery system for multiple tenants with Nest.js, React.js, Three.js, Apollo Federation, and AWS. Created a sophisticated food ordering and management web app with Next.js, Nest.js, PostgreSQL, GraphQL, and AWS. Contributed to construction management software development using React.js, Nest.js, React Native, PostgreSQL, and AWS. Collaborated with cross-functional teams for feature delivery and enhancements, staying updated on emerging technologies and best practices. Demonstrated innovation and proficiency in integrating diverse technologies.',
    },
    {
      duration: 'Apr 2022 - May 2023',
      company: 'Fauji Foundation Head Office',
      location: 'Rawalpindi',
      position: 'Frontend Developer',
      description:
        'Advanced front-end development for the Medix Hospital Management System (HMS) using React.js and key libraries. Collaborated with cross-functional teams to implement REST APIs and JWT Authentication. Developed multiple dashboards and portals with React for a rich user experience. Streamlined state management using Redux Toolkit and RTK Query, ensuring seamless data flow. Integrated React Router for efficient navigation and Vite for rapid development. Used Ant Design and Tailwind CSS to create visually appealing and intuitive user interfaces, enhancing accessibility and user engagement.',
    },
    {
      duration: 'Sep 2019 - Apr 2022',
      company: 'SOFIT Consultancy',
      location: 'Islamabad',
      position: 'Frontend Developer',
      description:
        'Developed dynamic dashboards and interactive company portals using React.js, Next.js, and responsive design techniques. Utilized React Hooks, Redux Toolkit, and React Router for intuitive user interfaces and enhanced interactions. Implemented JWT Authentication for secure data access, integrating REST APIs with Axios. Used Formik and Yup to streamline data entry and validation. Collaborated with teams to integrate SASS and Bootstrap for consistent styling. Contributed to code maintenance and performance optimizations, ensuring efficient front-end solutions.',
    },
  ],
  projects: {
    heading: (
      <>
        A Small Selection of <span className='text-primary'>My Recent Projects</span>
      </>
    ),
    projects: [
      {
        title: 'MaxAttire',
        href: 'http://themaxattire.com/',
        image: '/maxattire.png',
        description: 'A comprehensive e-commerce platform specializing in custom decoration services.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Next',
            icon: 'next' satisfies Icon as Icon,
          },
          {
            name: 'MySQL',
            icon: 'mySQL' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'ATC Tees',
        href: 'http://atctees.com/',
        image: '/atctees.png',
        description:
          'An innovative e-commerce platform offering custom t-shirt designs and a marketplace for team stores.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Next',
            icon: 'next' satisfies Icon as Icon,
          },
          {
            name: 'tRPC',
            icon: 'tRPC' satisfies Icon as Icon,
          },
          {
            name: 'Square',
            icon: 'square' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'ChatDocs',
        href: 'http://github.com/MuhammadUsamaAwan/chat-docs',
        image: '/chatdocs.png',
        description: 'A LLM chatbot designed to answer questions related to any documents you upload.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Next',
            icon: 'next' satisfies Icon as Icon,
          },
          {
            name: 'SQLite',
            icon: 'sqlite' satisfies Icon as Icon,
          },
          {
            name: 'Langchain',
            icon: 'langchain' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'Expense Tracker',
        href: 'https://expense-tracker-eight-livid.vercel.app/',
        image: '/expensetracker.png',
        description:
          'A PWA where where users can create custom categories and templates to effectively track their expenses.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Next',
            icon: 'next' satisfies Icon as Icon,
          },
          {
            name: 'Postgres',
            icon: 'postgres' satisfies Icon as Icon,
          },
          {
            name: 'Mantine',
            icon: 'mantine' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'DevsClan',
        href: 'http://devsclan.co.uk/',
        image: '/devsclan.png',
        description: 'A company website offering services for web, mobile, AR, and VR development.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Astro',
            icon: 'astro' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'Astro Blog',
        href: 'https://muhammad-usama-awan.vercel.app/',
        image: '/astroblog.png',
        description:
          'Blog powered by Astro and MDX, featuring dynamic tags, RSS feed, search functionality, and pagination.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Astro',
            icon: 'astro' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'Instagram Clone',
        href: 'https://instagram-clone-reupload.vercel.app/login',
        image: '/instagramclone.png',
        description:
          'A clone of the Instagram web application where users can register, follow others, and share images.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Next',
            icon: 'next' satisfies Icon as Icon,
          },
          {
            name: 'Firebase',
            icon: 'firebase' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
      {
        title: 'Handy Things',
        href: 'https://handy-things.vercel.app/',
        image: '/handythings.png',
        description: 'A one-stop website containing a collection of useful tools for developers.',
        skills: [
          {
            name: 'Typescript',
            icon: 'typescript' satisfies Icon as Icon,
          },
          {
            name: 'Next',
            icon: 'next' satisfies Icon as Icon,
          },
          {
            name: 'TailwindCSS',
            icon: 'tailwind' satisfies Icon as Icon,
          },
        ],
      },
    ],
  },
  certifications: {
    heading: (
      <>
        Certifications That Set <span className='text-primary'>Me Apart</span>
      </>
    ),
    certifications: [
      {
        name: '15 Days of SQL: The Complete SQL Masterclass',
        instructor: 'Nikolai Schuler',
        issuer: 'Udemy',
        image: '/sql.jpg',
      },
      {
        name: 'NestJS Microservices: Build & Deploy a Scalable Backend',
        instructor: 'Michael Guay',
        issuer: 'Udemy',
        image: '/nest.jpg',
      },
      {
        name: 'Fast API - The Complete Course (Beginner + Advanced)',
        instructor: 'Eric Roby, Chad Darby',
        issuer: 'Udemy',
        image: '/fastapi.jpg',
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
      icon: 'send' satisfies Icon as Icon,
    },
  },
};
