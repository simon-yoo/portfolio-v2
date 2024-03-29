'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hook'
import { useActiveSectionContext } from '@/context/active-section-context'
;``
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id='home'
      className='mb-22 max-w-[50rem] scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/images/simon.jpeg'
              width='192'
              height='192'
              alt='profile'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl dark:border-stone-700'
            />
          </motion.div>
          <motion.span
            className='text-3xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-12 px-4 text-wxl font-medium !leading-[1.5] sm:text-3xl text-center'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Simon.</span> I'm a{' '}
        <span className='font-bold'>Full-stack Developer.</span> I enjoy
        building <span className='italic'>sites & apps.</span> My focus is{' '}
        <span className='underline'>React (Next.js)</span>
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-6 text-lg'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group shadow-2xl  bg-stone-700 text-stone-100 mx-1 px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:rounded-2xl hover:bg-stone-200 hover:text-stone-600 hover:border-stone/10 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          href='/CV-Simon.pdf'
          download
          className='group shadow-2xl bg-stone-500 text-stone-100 mx-1 px-7 py-3 flex items-center gap-2 rounded-lg cursor-pointer focus:scale-110 hover:scale-110 hover:rounded-2xl hover:bg-stone-200 hover:text-stone-600 hover:border-stone/10  active:scale-105  transition'
        >
          Download CV{' '}
          <HiDownload className='opacity-70 group-hover:translate-y-1 transition ' />
        </a>
        <div className='flex gap-1 sm:gap-2'>
          <a
            href='https://www.linkedin.com/in/simon-yoo-12b078183/'
            target='_blank'
            className='group shadow-2xl bg-stone-200 text-stone-900 mx-1 p-4 flex items-center gap-2 rounded-lg border-stone/10 focus:scale-[1.15] hover:scale-[1.15] hover:rounded-2xl hover:bg-stone-600 hover:text-stone-200  active:scale-105 transition dark:bg-stone-600 dark:text-stone-100 dark:text-opacity-90'
          >
            <BsLinkedin className='' />
          </a>

          <a
            href='https://github.com/simon-yoo'
            target='_blank'
            className='group bg-stone-200 shadow-2xl text-stone-900 mx-1 p-4 flex items-center gap-2 rounded-lg text-[1.24rem] border-stone/10 focus:scale-[1.15] hover:scale-110 hover:rounded-2xl hover:bg-stone-600 hover:text-stone-200 active:scale-105  transition dark:bg-stone-600 dark:text-stone-100 dark:text-opacity-90'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
