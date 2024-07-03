import {
  ActivityIcon,
  BicepsFlexedIcon,
  CircleHelpIcon,
  CircleUserRoundIcon,
  FolderGit2Icon,
  HouseIcon,
} from 'lucide-react';

export const siteConfig = {
  title: 'Muhammad Usama',
  description:
    'Full Stack Developer. Skilled in critical thinking and analytical problem-solving. Passionate about continuously learning new technologies and enhancing current skill sets.',
  nav: [
    {
      name: 'Home',
      href: '/',
      icon: <HouseIcon className='size-4 sm:hidden' />,
    },
    {
      name: 'About',
      href: '/about',
      icon: <CircleHelpIcon className='size-4 sm:hidden' />,
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: <FolderGit2Icon className='size-4 sm:hidden' />,
    },
    {
      name: 'Skills',
      href: '#skills',
      icon: <BicepsFlexedIcon className='size-4 sm:hidden' />,
    },
    {
      name: 'Experience',
      href: '#experience',
      icon: <ActivityIcon className='size-4 sm:hidden' />,
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: <CircleUserRoundIcon className='size-4 sm:hidden' />,
    },
  ],
  links: {
    github: 'https://github.com/MuhammadUsamaAwan',
    linkedin: 'https://www.linkedin.com/in/muhammad-usama-704400192/',
  },
};
