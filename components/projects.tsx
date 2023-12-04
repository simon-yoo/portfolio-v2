import React, { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion'

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, imageUrl, tags }: ProjectProps) {
  const ref = useRef(null)
  useScroll({
    target: '',
    offset: ['0 1', '1.33 1'],
  })
  return (
    <section className='group rounded-md bg-stone-400 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-10 hover:bg-stone-600 transition'>
      <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
        <h3 className='text-2xl font-semibold group-hover:text-stone-300 transition'>
          {title}
        </h3>
        <p className='italic mt-2 leading-relaxed text-stone-700 group-hover:text-stone-300 transition'>
          {description}
        </p>
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-stone-100 rounded-md'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt='projects'
        quality={95}
        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40'
      />
    </section>
  )
}
