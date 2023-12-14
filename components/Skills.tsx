'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hook'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center text-lg gap-4 mt-10 text-stone-600'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            className='bg-stone-200 border borderBlack rounded-md px-5 py-3 shadow-2xl'
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
