'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        My journey as a software developer began at{' '}
        <span className='font-bold'>Dev Academy</span>, a renowned coding
        Bootcamp that sparked my passion for{' '}
        <span className='italic'>problem-solving</span> and{' '}
        <span className='italic'>innovative thinking</span>. With a solid
        foundation in coding, I am driven to continuously expand my knowledge
        and tackle new challenges in the{' '}
        <span className='font-bold'>dynamic world of software development</span>
        .
      </p>
      <p>
        I am eager to contribute my skills, learn from experienced
        professionals, and make a meaningful impact in the industry. I am
        excited to connect with{' '}
        <span className='italic'>like-minded individuals</span> and{' '}
        <span className='italic'>
          organisations to collaborate, grow, and thrive in the world of
          software development.
        </span>
        Let's connect and explore opportunities to create innovative solutions
        together.
      </p>
    </motion.section>
  )
}
