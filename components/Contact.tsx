'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hook'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './SubmitBtn'
import toast from 'react-hot-toast'

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
      <p className='text-stone-500 -mt-3 dark:text-stone-400 dark:text-opacity-90'>
        Please contact me directly at{' '}
        <a
          href='mailto:yoosghn0@gmail.com'
          className='underline text-stone-950 dark:text-stone-100 dark:text-opacity-90'
        >
          yoosghn0@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Succesfully sent email!')
        }}
        className='mt-8 flex flex-col '
      >
        <input
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          className='h-14 px-4 rounded-lg borderBlack bg-stone-100 outline-none focus:bg-white dark:bg-stone-300/20 dark:focus:bg-stone-300/30 dark:outline-none dark:text-stone-100 dark:text-opacity-90'
          placeholder='Your email'
        />
        <textarea
          name='message'
          required
          maxLength={5000}
          className='h-52 my-3 rounded-lg borderBlack p-4 bg-stone-100 outline-none focus:bg-white dark:bg-stone-300/20 dark:focus:bg-stone-300/30 dark:outline-none dark:text-stone-100 dark:text-opacity-90'
          placeholder='Your message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
