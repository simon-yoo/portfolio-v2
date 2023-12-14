import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100% ,38rem)]'>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-stone-600'>
        Please contact me directly at{' '}
        <a href='mailto:yoosghn0@gmail.com' className='underline'>
          yoosghn0@gmail.com
        </a>
        or through this form.
      </p>

      <form action='' className='mt-10 flex flex-col '>
        <input
          type='email'
          className='h-14 px-4 rounded-lg borderBlack'
          placeholder='Your email'
        />
        <textarea
          name=''
          id=''
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
    </section>
  )
}
