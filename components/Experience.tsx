'use client'

import { useSectionInView } from '@/lib/hook'
import React from 'react'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useTheme } from '@/context/ThemeContext'

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  const { theme } = useTheme()
  console.log(experiencesData)

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor='#d6d3d1'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#a8a6a5' : '#4b4b4b',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem  2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid #4b4b4b',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? '#9ca3af' : '#4b4b4b',
                fontSize: '1.5rem',
                color: theme === 'light' ? '#000' : '#bfbbbb',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-stone-600 dark:text-stone-200/50'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
