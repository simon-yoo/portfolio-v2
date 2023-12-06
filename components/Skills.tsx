import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hook'
import { link } from 'fs'
import { skillsData } from '@/lib/data'

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section>
      <SectionHeading>My skills</SectionHeading>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
