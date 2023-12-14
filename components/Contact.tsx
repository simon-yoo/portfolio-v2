'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hook'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100% ,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-stone-500 -mt-3'>
        Please contact me directly at{' '}
        <a
          href='mailto:yoosghn0@gmail.com'
          className='underline text-stone-950'
        >
          yoosghn0@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          console.log(formData)
        }}
        className='mt-8 flex flex-col '
      >
        <input
          type='email'
          required
          maxLength={500}
          className='h-14 px-4 rounded-lg borderBlack'
          placeholder='Your email'
        />
        <textarea
          name=''
          id=''
          required
          maxLength={500}
          className='h-52 my-3 rounded-lg borderBlack p-4'
          placeholder='Your message'
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-stone-700 text-stone-100 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-stone-900 hover:text-stone-100'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />
        </button>
      </form>
    </motion.section>
  )
}
