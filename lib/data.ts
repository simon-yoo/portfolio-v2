import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import wawo from '@/public/images/wa-wo.png'
import aicompanion from '@/public/images/ai-companion.png'
import messenger from '@/public/images/messenger.png'
import worldgym from '@/public/images/worldgym.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Freelancer, content creator, contractor',
    location: 'New Market, Auckland',
    description: `Moving on from the course from Dev Academy, I immersed myself into learning and exploring new Technologies, building and deploying quite a few full-stack projects, as well as contributing contents for some of the high-views youtube coding channels. Also currently a moderator of a React/Nextjs community with 10k+ members.`,
    icon: React.createElement(CgWorkAlt),
    date: '09/2023 - Present',
  },
  {
    title: 'Full-stack Developer',
    location: 'New Market, Auckland',
    description:
      'I graduated from Level 6 in Applied Software Development course from Dev Academy Aotearoa. I gained practical experience through pair programming and weekly group projects. Also developed strong collaboration, communication, and problem solving skills. I have been equipped with technical skills and a commitment to lifelong learning for a successful apps&sites development career.',
    icon: React.createElement(LuGraduationCap),
    date: '06-09/2023',
  },
  {
    title: 'Residential Painter',
    location: 'Auckland, New Zealand',
    description:
      'I owned a small residential painting company for 1 year. I was responsible for painting the interior and exterior of houses. I was responsible for managing the team and ensuring the quality of the work.',
    icon: React.createElement(CgWorkAlt),
    date: '05/2022 - 06/2023',
  },
  {
    title: 'Real Estate Agent',
    location: 'Auckland, New Zealand',
    description:
      'Contract self-employed Real Estate Salesperson in a Top team of more than 2 years. I was responsible for selling properties and managing the customers with my knowledge and skills to achieve their needs and wants.',
    icon: React.createElement(CgWorkAlt),
    date: '05/2019 - 05/2022',
  },
  {
    title: 'Carpenter',
    location: 'Auckland, New Zealand',
    description:
      'I worked as a carpenter for more 2 years with wide range of experise on both residential and commercial projects.',
    icon: React.createElement(CgWorkAlt),
    date: '05/2016 - 05/2019',
  },
] as const

export const projectsData = [
  {
    title: 'Wardrobe Wonders',
    description:
      'My final group project in Dev Academy. Your digital wardrobe !',
    tags: ['React', 'PostgresSQL', 'Tailwind', 'Knex.js', 'Express.js'],
    imageUrl: wawo,
    link: 'https://wardrobe-wonders.onrender.com',
  },
  {
    title: 'Ai-companion',
    description:
      'A SaaS app where you can create your own custom AI companion and be able to interact with it.',
    tags: [
      'Next.js',
      'React.js',
      'ClerkAuth',
      'Prisma',
      'mysql',
      'Tailwind',
      'Stripe',
      'Pinecone',
      'OpenAI',
    ],
    imageUrl: aicompanion,
    link: 'https://saas-ai-companion-beta.vercel.app/',
  },
  {
    title: 'Messenger App',
    description:
      'A simple realtime messenger app inspired by facebook messenger.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'MongoDB',
      'Pusher',
      'Prisma',
      'Axios',
      'Cloudinary',
      'Auth0',
    ],
    imageUrl: messenger,
    link: 'https://msg-clone.vercel.app/',
  },
  {
    title: 'Word Gym',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'TypeScript', 'Css', 'HTML', 'EmailJS'],
    imageUrl: worldgym,
    link: 'https://gym-tau-nine.vercel.app/',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Knex.js',
  'MongoDB',
  '@tanstack/react-query',
  'Axios',
  'Express.js',
  'mysql',
  'Express.js',
  'Framer Motion',
  'websocket',
  'socket.io',
] as const
