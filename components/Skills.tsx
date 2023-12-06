'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hook'
import { skillsData } from '@/lib/data'

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center text-lg gap-2 text-stone-600'>
        {skillsData.map((skill, index) => (
          <li
            className='bg-stone-200 border border-black/[0.1] rounded-md px-5 py-3 shadow-2xl'
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
