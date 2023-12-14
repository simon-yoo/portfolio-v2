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
import { experiencesData } from '@/lib/data'

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor='#d6d3d1'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#d6d3d1',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem  2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: '#9ca3af',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-stone-500'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}