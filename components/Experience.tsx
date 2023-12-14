'use client'

import { useSectionInView } from '@/lib/hook'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  return (
    <section id='experience' ref={ref}>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline></VerticalTimeline>
    </section>
  )
}
