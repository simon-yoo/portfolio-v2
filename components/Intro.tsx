'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem]'>
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
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
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
      <motion.p
        className='mb-10 mt-12 px-4 text-wxl font-medium !leading-[1.5] sm:text-3xl text-center'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Simon.</span> I'm a{' '}
        <span className='font-bold'>Full-stack Developer.</span> I enjoy
        building <span className='italic'>sites & apps.</span> My focus is{' '}
        <span className='underline'>React (Next.js)</span>
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-6 text-lg'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='bg-stone-700 text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-stone-400 hover:text-stone-900 active:scale-105 transition'
        >
          Contact me <BsArrowRight className='opacity-70' />
        </Link>
        <a className='bg-stone-500 text-white px-7 py-3 flex items-center gap-2 rounded-lg'>
          Download CV <HiDownload />
        </a>
        <a
          href=''
          className='bg-stone-200 text-stone-900 p-4 flex items-center gap-2 rounded-lg'
        >
          <BsLinkedin />
        </a>
        <a
          href=''
          className='bg-stone-200 text-stone-900 p-4 flex items-center gap-2 rounded-lg text-[1.24rem]'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
