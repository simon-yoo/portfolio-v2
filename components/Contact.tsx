import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact'>
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{' '}
        <a href='mailto:yoosghn0@gmail.com' className='underline'>
          yoosghn0@gmail.com
        </a>
        or through this form.
      </p>

      <form action=''>
        <input type='email' />
        <textarea name='' id=''></textarea>
        <button type='submit'>
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  )
}
