import { DownloadIcon, SendIcon } from 'lucide-react';

import type { IconProps, SkillIcon } from '~/content/skill-icons';

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
          'typescript',
          'next',
          (props: IconProps) => (
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#4479A1' {...props}>
              <title>MySQL</title>
              <path d='M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z' />
            </svg>
          ),
          ,
          'tailwind',
        ] as SkillIcon[],
      },
      {
        title: 'ATC Tees',
        href: 'http://atctees.com/',
        image: '/atctees.png',
        description:
          'An innovative e-commerce platform offering custom t-shirt designs and a marketplace for team stores.',
        skills: [
          'typescript',
          'next',
          (props: IconProps) => (
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#4479A1' {...props}>
              <title>MySQL</title>
              <path d='M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z' />
            </svg>
          ),
          (props: IconProps) => (
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#2596BE' {...props}>
              <title>tRPC</title>
              <path d='M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12ZM1.21 12A10.78 10.78 0 0 0 12 22.79 10.78 10.78 0 0 0 22.79 12 10.78 10.78 0 0 0 12 1.21 10.78 10.78 0 0 0 1.21 12Zm10.915-6.086 2.162 1.248a.25.25 0 0 1 .125.217v1.103l2.473 1.428a.25.25 0 0 1 .125.217v2.355l.955.551a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-.956-.552-2.472 1.427a.25.25 0 0 1-.25 0l-2.472-1.427-.956.552a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l.955-.551v-2.355a.25.25 0 0 1 .125-.217l2.473-1.428V7.38a.25.25 0 0 1 .125-.217l2.162-1.248a.25.25 0 0 1 .25 0Zm1.268 10.049a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l2.16-1.248a.25.25 0 0 1 .25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 0 1 .25 0l2.16 1.248a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-.705.408L12 17.582l2.098-1.211ZM10.088 9.73l1.662.96V8.766l-1.662-.955Zm3.824 0V7.811l-1.662.955v1.924ZM12 6.418l-1.66.96 1.66.954 1.66-.954Zm-5.59 9.184 1.66.958v-1.921l-1.66-.956Zm3.822 0v-1.92l-1.662.957v1.923Zm-1.91-3.311-1.662.96 1.661.955 1.66-.956Zm5.446 3.31 1.66.96v-1.922l-1.66-.956Zm3.822 0v-1.918l-1.662.956v1.922Zm-1.912-3.31-1.66.96 1.66.955 1.66-.956Z' />
            </svg>
          ),
          (props: IconProps) => (
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#3E4348' {...props}>
              <title>Square</title>
              <path d='M4.01 0A4.01 4.01 0 000 4.01v15.98c0 2.21 1.8 4 4.01 4.01h15.98C22.2 24 24 22.2 24 19.99V4A4.01 4.01 0 0019.99 0H4zm1.62 4.36h12.74c.7 0 1.26.57 1.26 1.27v12.74c0 .7-.56 1.27-1.26 1.27H5.63c-.7 0-1.26-.57-1.26-1.27V5.63a1.27 1.27 0 011.26-1.27zm3.83 4.35a.73.73 0 00-.73.73v5.09c0 .4.32.72.72.72h5.1a.73.73 0 00.73-.72V9.44a.73.73 0 00-.73-.73h-5.1Z' />
            </svg>
          ),
          'tailwind',
        ] as SkillIcon[],
      },
      {
        title: 'ChatDocs',
        href: 'http://github.com/MuhammadUsamaAwan/chat-docs',
        image: '/chatdocs.png',
        description: 'A LLM chatbot designed to answer questions related to any documents you upload.',
        skills: [
          'typescript',
          'next',
          (props: IconProps) => (
            <svg
              key='sqlite'
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='#003B57'
              {...props}
            >
              <title>SQLite</title>
              <path d='M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z' />
            </svg>
          ),
          'tailwind',
        ] as SkillIcon[],
      },
      {
        title: 'Expense Tracker',
        href: 'https://expense-tracker-eight-livid.vercel.app/',
        image: '/expensetracker.png',
        description:
          'A PWA where where users can create custom categories and templates to effectively track their expenses.',
        skills: [
          'typescript',
          'next',
          'postgres',
          (props: IconProps) => (
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#339AF0' {...props}>
              <title>Mantine</title>
              <path d='M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0zm-1.613 6.15a.91.91 0 0 1 .59.176c.43.317.825.68 1.177 1.082h2.588a.91.91 0 0 1 .912.906.909.909 0 0 1-.912.907h-1.43c.4.908.604 1.889.602 2.88a7.133 7.133 0 0 1-.601 2.883h1.427a.91.91 0 0 1 .914.907.91.91 0 0 1-.914.906h-2.588a7.399 7.399 0 0 1-1.175 1.082.919.919 0 0 1-1.28-.19.904.904 0 0 1 .191-1.268 5.322 5.322 0 0 0 2.2-4.32c0-1.715-.801-3.29-2.2-4.32a.906.906 0 0 1-.191-1.268H9.7a.916.916 0 0 1 .688-.363zm-.778 4.295a1.36 1.36 0 0 1 1.354 1.354v.033a1.36 1.36 0 0 1-1.354 1.32 1.36 1.36 0 0 1-1.353-1.32v-.033a1.36 1.36 0 0 1 1.353-1.354z' />
            </svg>
          ),
        ] as SkillIcon[],
      },
      {
        title: 'DevsClan',
        href: 'http://devsclan.co.uk/',
        image: '/devsclan.png',
        description: 'A company website offering services for web, mobile, AR, and VR development.',
        skills: ['typescript', 'astro', 'tailwind'] as SkillIcon[],
      },
      {
        title: 'Astro Blog',
        href: 'https://muhammad-usama-awan.vercel.app/',
        image: '/astroblog.png',
        description:
          'Blog powered by Astro and MDX, featuring dynamic tags, RSS feed, search functionality, and pagination.',
        skills: ['typescript', 'astro', 'tailwind'] as SkillIcon[],
      },
      {
        title: 'Handy Things',
        href: 'https://handy-things.vercel.app/',
        image: '/handythings.png',
        description: 'A one-stop website containing a collection of useful tools for developers.',
        skills: ['typescript', 'next', 'tailwind'] as SkillIcon[],
      },
      {
        title: 'Instagram Clone',
        href: 'https://instagram-clone-reupload.vercel.app/login',
        image: '/instagramclone.png',
        description:
          'A clone of the Instagram web application where users can register, follow others, and share images.',
        skills: ['react', 'firebase', 'tailwind'] as SkillIcon[],
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
